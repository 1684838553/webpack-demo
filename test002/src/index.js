import helloword from "./helloword";
import imgSrc from './assets/img001.png'
import logoSvg from './assets/pear.svg'
import demoText from './assets/demo.txt'
import './style.css'
import './style.less'
// import Data from './assets/data.xml'
// import Notes from './assets/data.csv'
import _ from 'lodash'
import './async-module.js'
import { craeteSpanElement } from './createElement'
import $ from 'jquery'

console.log($)

// helloword()
// webpack 配置 resolve.extensions，同名文件，先执行文件后缀在数组索引小的
console.log(helloword)

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


// console.log(Data, Notes)
console.log(_.join(['index', 'module', 'loaded!'], ' '))


fetch('/api/hello')
    .then(res => res.text())
    .then(res => {
        console.log(res, 'res')
        craeteSpanElement(res)
    })


const worker = new Worker(new URL('./work.js', import.meta.url));
worker.postMessage({
    question: 'hi，那边的workder线程，请告诉我今天的幸运数字是多少？',
});
worker.onmessage = ({ data: { answer } }) => {
    console.log(answer);
};
