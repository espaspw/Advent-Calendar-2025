(() => {
const button = document.createElement('button')
const style = document.createElement('style')
style.appendChild(document.createTextNode(`
.action-bar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  background: #fcfffb;
  border-top: 1px solid #bed9c1;
  box-shadow: 0px -1px 4px 0px #c0c0c051;
  padding: 8px 24px;
}

.action-bar-svg-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border: none;
  background: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background .2s linear;
}

.action-bar-svg-container:hover {
  background: #eee;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  margin: 24px;
  padding: 12px 24px;
  background: white;
  border-radius: 5px;
  border: 1px solid #222;
  color: #222;
  box-shadow: 0px 1px 4px 0px #c0c0c051;
  z-index: 10000;
  opacity: 1;
  transition: opacity 1s linear;
}

.hidden {
  opacity: 0;
}
`))
document.head.appendChild(style)

const linkSVG = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
width="16px" height="16px" viewBox="0 0 457.03 457.03"
xml:space="preserve">
<g>
<path fill="#444" d="M421.512,207.074l-85.795,85.767c-47.352,47.38-124.169,47.38-171.529,0c-7.46-7.439-13.296-15.821-18.421-24.465
 l39.864-39.861c1.895-1.911,4.235-3.006,6.471-4.296c2.756,9.416,7.567,18.33,14.972,25.736c23.648,23.667,62.128,23.634,85.762,0
 l85.768-85.765c23.666-23.664,23.666-62.135,0-85.781c-23.635-23.646-62.105-23.646-85.768,0l-30.499,30.532
 c-24.75-9.637-51.415-12.228-77.373-8.424l64.991-64.989c47.38-47.371,124.177-47.371,171.557,0
 C468.869,82.897,468.869,159.706,421.512,207.074z M194.708,348.104l-30.521,30.532c-23.646,23.634-62.128,23.634-85.778,0
 c-23.648-23.667-23.648-62.138,0-85.795l85.778-85.767c23.665-23.662,62.121-23.662,85.767,0
 c7.388,7.39,12.204,16.302,14.986,25.706c2.249-1.307,4.56-2.369,6.454-4.266l39.861-39.845
 c-5.092-8.678-10.958-17.03-18.421-24.477c-47.348-47.371-124.172-47.371-171.543,0L35.526,249.96
 c-47.366,47.385-47.366,124.172,0,171.553c47.371,47.356,124.177,47.356,171.547,0l65.008-65.003
 C246.109,360.336,219.437,357.723,194.708,348.104z"/>
</g>
</svg>`

button.classList.add('copy-link-btn')
const span = document.createElement('span')
span.classList.add('copy-link-text')
span.textContent = '∧'
button.appendChild(span)
button.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
})

const entries = document.querySelectorAll('.entry')

function showPopup(text) {
  const popup = document.createElement('div')
  popup.textContent = text
  popup.classList.add('popup')
  document.body.appendChild(popup)
  setTimeout(() => {
    popup.classList.add('hidden')
    setTimeout(() => {
      document.body.removeChild(popup)
    }, 1000)
  }, 2000)
}

for (const entry of entries) {
  const actionBar = document.createElement('div')
  actionBar.classList.add('action-bar')
  const svgContainer = document.createElement('button')
  svgContainer.classList.add('action-bar-svg-container')
  svgContainer.innerHTML = linkSVG
  svgContainer.addEventListener('click', () => {
    const link = `${window.location.href.split('#')[0]}#${entry.id}`
    navigator.clipboard.writeText(link)
    showPopup(`Copied "${link}"`)
  })
  actionBar.appendChild(svgContainer)
  entry.appendChild(actionBar)
}
})()
