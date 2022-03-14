import style from './app.css'
console.log(style)

const div = document.createElement('div')
div.textContent = 'hello postcss'
div.classList.add(style.box)
document.body.appendChild(div)