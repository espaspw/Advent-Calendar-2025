/**
 * Exports metadata about discord users involved with the advent calendar
 * Reads and parses users/users.csv, which is done synchronously on module load
 * due to small data size and for program simplicity
 * The avatar field refers to a specific filename within the users/ directory
 */
import { parse } from 'csv-parse/sync'
import fs from 'node:fs'
import path from 'node:path'

type CSVRow = string[]
export interface UserInfo {
  id: string;
  globalUsername: string;
  globalNickname: string;
  serverNickname: string;
  pronouns: string | null;
  globalAvatar: string;
  serverAvatar: string | null;
}
export type Users = Record<string, UserInfo>

const placeholderUser: UserInfo = {
  id: "",
  globalUsername: "username (global)",
  globalNickname: "nickname (global)",
  serverNickname: "nickname (server)",
  pronouns: null,
  globalAvatar: "placeholder.png",
  serverAvatar: "placeholder.png",
}

const usersCSV = fs.readFileSync(path.resolve(__dirname, '../users', 'users.csv'))
const parsedCSV = parse(usersCSV) as CSVRow[]
const users: Users = {}
parsedCSV.forEach(row => {
  const [id, globalUsername, globalNickname, serverNickname, pronouns, globalAvatar, serverAvatar] = row
  users[id] = {
    id,
    globalUsername,
    globalNickname,
    serverNickname,
    pronouns: pronouns || null,
    globalAvatar,
    serverAvatar: serverAvatar || null,
  }
})
users["placeholder"] = placeholderUser

export default users
