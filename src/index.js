import {model} from './model'
import {Site} from './class/site'
import './style/main.css'
import { Sidebar } from './class/slidebar'

const site = new Site('#site')

site.render(model)

const updateCallback = newBlock => {
    model.push(newBlock)
    site.render(model)
}

new Sidebar('#panel',updateCallback )