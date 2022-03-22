import './style.css'
import { add } from './math'
import _ from 'loadsh'

const result = add(1, 2)

console.log('hello pikaqiu!!!', result, _.join(['index', 'other'], ' '))

function createElement(label, content, parentLabel, className) {
    const ele = document.createElement(label)
    ele.setAttribute('class', className)
    ele.innerHtml = content
    parentLabel.appendChild(ele)
}

let content = 'hello webpack!'
let parentLabel = document.body
createElement('div', content, parentLabel, 'box1')
