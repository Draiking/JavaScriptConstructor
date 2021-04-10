import {model} from './model'
import {templates} from './template'
import './style/main.css'

const $site = document.querySelector('#site')

model.forEach(block => {
    const toHTML = templates[block.type]

    $site.insertAdjacentHTML('beforeend', toHTML(block))
})