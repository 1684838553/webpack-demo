import helloword from "./helloword";
import imgSrc from './assets/img001.png'
import logoSvg from './assets/pear.svg'
import demoText from './assets/demo.txt'

helloword()

const img = document.createElement('img')
img.src = imgSrc
img.style.cssText = 'width:300px;height:500px'
document.body.appendChild(img)

const img1 = document.createElement('img')
img1.src = logoSvg
img1.style.cssText = 'width:300px;height:500px'
document.body.appendChild(img1)

const block = document.createElement('div')
block.textContent = demoText
document.body.appendChild(block)
