import Handlebars from "handlebars";
import { parse } from 'discord-markdown-parser'
import { minify } from 'html-minifier-terser'
import fs from 'node:fs'
import path from 'node:path'

import entries, { EntryData, ParsedEntryData, type ParsedEntry, type Entry } from './data/entries';
import { channelMap, userMap } from "./data/mappings";

import createTemplate from './template'

/** Reads a file from filepath and returns a base64 string to be embeded in an html file */
async function convertImageToBase64(filepath: string) {
  const image: Buffer = await new Promise((res, rej) => {
    fs.readFile(filepath, (err, data) => {
      if (err) { rej(err) }
      res(data)
    })
  })
  return image.toString('base64')
}

/** Counts number of '#' at start of string, i.e. '### a # b' -> 3 */
function countOctothorpesAtStart(input: string): number {
  let count = 0
  let i = 0
  while (i < input.length && input[i] === '#') {
    count += 1
    i += 1
  }
  return count
}

/** 
 * Converts all text nodes representing headings into a heading node
 * This is a workaround as headings are not yet supported by discord-markdown-parser
 * i.e. { type: 'text', content: '### Header' } -> 
 * {
 *    type: 'heading',
 *    level: 3,
 *    content: [{ type: 'text', content: 'Header' }]
 * }
 */
function convertTextNodesToHeadingsInPlace(nodes: ReturnType<typeof parse>) {
  for (const node of nodes) {
    if (node.type === 'text') {
      const trimmedString = (node.content as string).trimStart()
      if (trimmedString.startsWith('#')) {
        const numOctothorpes = countOctothorpesAtStart(trimmedString)
        if (trimmedString[numOctothorpes] === ' ') {
          node.content = trimmedString.substring(numOctothorpes + 1)
          node.type = 'heading'
          node.level = numOctothorpes
        }
      }
      if (trimmedString.startsWith('-# ')) {
        node.content = trimmedString.substring(3)
        node.type = 'subtext'
      }
    } else if ("content" in node && Array.isArray(node.content)) {
      convertTextNodesToHeadingsInPlace(node.content)
    }
  }
}

/** 
 * Recursively takes adjacent text nodes and combines them into one, leaving all other nodes alone
 * i.e. [{ type: 'text', content: 'h' }, { type: 'text', content: 'i' }] -> [{ type: 'text', content: 'hi' }]
 * Returns a new list containing the old nodes if untouched, or new coalesced nodes if applicable
 * (in other words, don't use the original input after calling this function)
 */
function coalesceTextNodes(nodes: ReturnType<typeof parse>) {
  const coalescedNodes = []
  let textNodes = []
  for (const node of nodes) {
    if (node.type === 'text') {
      textNodes.push(node.content)
    } else {
      if (textNodes.length > 0) {
        coalescedNodes.push({
          type: 'text',
          content: textNodes.join(''),
        })
        textNodes = []
      }
      if ('content' in node && Array.isArray(node.content)) {
        node.content = coalesceTextNodes(node.content)
      }
      coalescedNodes.push(node)
    }
  }
  if (textNodes.length > 0) {
    coalescedNodes.push({
      type: 'text',
      content: textNodes.join(''),
    })
    textNodes = []
  }
  return coalescedNodes
}

/**
 * If a message contains nothing but emoji items, mark the emojis as a large emoji
 */
function markLargeEmojisInPlace(nodes: ReturnType<typeof parse>) {
  for (const node of nodes) {
    if (node.type !== 'emoji') {
      return;
    }
  }
  for (const node of nodes) {
    node.isLarge = true
  }
}

/** 
 * Checks if an image file is provided for each emoji node
 * If file not found, sets a new "isMissing" key to true
 * Missing filenames are returned in a string list
 * The expected file location is "emojis/<emoji id>.(png|gif)"
 * webp isn't supported for simplicity reasons :^)
 */
function markMissingEmojiFiles(nodes: ReturnType<typeof parse>): string[] {
  const missingFilenames = []
  for (const node of nodes) {
    if (node.type === 'emoji') {
      const filename = node.animated ? `${node.id}.gif` : `${node.id}.png`
      const expectedFilepath = path.resolve(__dirname, '..', 'emojis', filename)
      if (!fs.existsSync(expectedFilepath)) {
        missingFilenames.push(filename)
        node.isMissing = true
      } else {
        node.isMissing = false
      }
    } else if ('content' in node && Array.isArray(node.content)) {
      missingFilenames.push(...markMissingEmojiFiles(node.content))
    }
  }
  return missingFilenames
}

/** 
 * For all channel nodes, injects a "name" field containing the name string
 * Returns a list of all channel IDs with no mapping
 */
function mapChannelIDsToName(nodes: ReturnType<typeof parse>): string[] {
  const unmappedIDs = []
  for (const node of nodes) {
    if (node.type === 'channel') {
      if (node.id in channelMap) {
        node.name = channelMap[node.id]
      } else {
        node.name = node.id
        unmappedIDs.push(node.id)
      }
    } else if ('content' in node && Array.isArray(node.content)) {
      unmappedIDs.push(...mapChannelIDsToName(node.content))
    }
  }
  return [...new Set(unmappedIDs)]
}

/** 
 * For all user nodes, injects a "name" field containing the name string
 * Returns a list of all user IDs with no mapping
 */
function mapUserIDsToName(nodes: ReturnType<typeof parse>): string[] {
  const unmappedIDs = []
  for (const node of nodes) {
    if (node.type === 'user') {
      if (node.id in userMap) {
        node.name = userMap[node.id]
      } else {
        node.name = node.id
        unmappedIDs.push(node.id)
      }
    } else if ('content' in node && Array.isArray(node.content)) {
      unmappedIDs.push(...mapUserIDsToName(node.content))
    }
  }
  return [...new Set(unmappedIDs)]
}

/** Print all the emoji IDs that do not have a mapping to console */
function annouceMissingEmojiFiles(missingFiles: string[]) {
  if (missingFiles.length <= 0) return;
  console.log('The following emoji files were not found. They will be replaced with a placeholder in the final output.')
  for (const missingFile of missingFiles) {
    const missingFilepath = path.join('emojis', missingFile)
    console.log(`    - ${missingFilepath}`)
  }
}

/** Print all the channel IDs that do not have a mapping to console */
function annouceUnmappedChannels(unmappedIDs: string[]) {
  if (unmappedIDs.length <= 0) return;
  console.log('The following channel IDs did not have a mapping. Please add one to the mapping file.')
  for (const unmappedID of unmappedIDs) {
    console.log(`    - ${unmappedID}`)
  }
}

/** Print all the user IDs that do not have a mapping to console */
function annouceUnmappedUsers(unmappedIDs: string[]) {
  if (unmappedIDs.length <= 0) return;
  console.log('The following user IDs did not have a mapping. Please add one to the mapping file.')
  for (const unmappedID of unmappedIDs) {
    console.log(`    - ${unmappedID}`)
  }
}

function parseEntryData(entryData: EntryData | undefined): ParsedEntryData | undefined {
  if (!entryData) return undefined
  return {
    userID: entryData.userID,
    data: entryData.data.map(entry => {
      if (typeof entry === 'string') {
        return parse(entry, 'extended')
      } else {
        return [{ type: 'attachment-group', items: entry }]
      }
    })
  }
}

function parseEntry(entry: Entry): ParsedEntry {
  const parsedJp = parseEntryData(entry.jp)
  const parsedEn = parseEntryData(entry.en)
  const parsedAnnoucement = parseEntryData(entry.annoucement)

  return {
    day: entry.day,
    en: parsedEn,
    jp: parsedJp,
    annoucement: parsedAnnoucement,
  }
}

async function main() {
  const parsedEntries: ParsedEntry[] = entries.map(parseEntry);

  const missingEmojiFiles: string[] = []
  const unmappedChannelIDs: string[] = []
  const unmappedUserIDs: string[] = []

  function processEntryData(entryData: ParsedEntryData) {
    entryData.data = entryData.data.map(d => coalesceTextNodes(d))
    entryData.data.forEach(d => {
      convertTextNodesToHeadingsInPlace(d)
      markLargeEmojisInPlace(d)
      missingEmojiFiles.push(...markMissingEmojiFiles(d))
      unmappedChannelIDs.push(...mapChannelIDsToName(d))
      unmappedUserIDs.push(...mapUserIDsToName(d))
    })
  }

  parsedEntries.forEach(entryData => {
    if (entryData.en) { processEntryData(entryData.en) }
    if (entryData.jp) { processEntryData(entryData.jp) }
    if (entryData.annoucement) { processEntryData(entryData.annoucement) }
  })
  annouceMissingEmojiFiles(missingEmojiFiles)
  annouceUnmappedChannels(unmappedChannelIDs)
  annouceUnmappedUsers(unmappedUserIDs)

  const mainTemplate = createTemplate(Handlebars)
  const output = mainTemplate({ entries: parsedEntries })
  const minifiedOutput = await minify(output, { collapseWhitespace: true })
  fs.writeFileSync('index.html', minifiedOutput)
}

main()
