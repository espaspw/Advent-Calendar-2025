
const button = document.createElement('button')
const style = document.createElement('style')
style.appendChild(document.createTextNode(`
.back-to-top-btn {
  position: fixed;
  right: 32px;
  bottom: 32px;
  z-index: 10;
  width: 48px;
  height: 48px;
  background: white;
  border: 1px solid #888;
  border-radius: 50%;
  cursor: pointer;
  transition: color 0.1s linear, background 0.1s linear;
  box-shadow: 0px 2px 4px 0px #c0c0c051;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #444;
}

.back-to-top-btn:hover {
  background: #444;
  color: white;
}

.back-to-top-text {
  position: relative;
  bottom: 2px;
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
}
`))
document.head.appendChild(style)

button.classList.add('back-to-top-btn')
const span = document.createElement('span')
span.classList.add('back-to-top-text')
span.textContent = '∧'
button.appendChild(span)
button.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
})

document.body.appendChild(button)
