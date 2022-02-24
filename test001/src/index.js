import helloword from "./helloword";
import imgSrc from './assets/img001.png'
import logoSvg from './assets/pear.svg'
import demoText from './assets/demo.txt'
import './style.css'
import './style.less'
import Data from './assets/data.xml'
import Notes from './assets/data.csv'

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
block.style.cssText = 'width:300px;height:80px'
block.classList.add('block-bg')
document.body.appendChild(block)


document.body.classList.add('hello')

const span = document.createElement('span')
span.classList.add('icon')
// 相应图标并获取字体编码
span.innerHTML = '&#xec66;'
document.body.appendChild(span)


console.log(Data, Notes)
