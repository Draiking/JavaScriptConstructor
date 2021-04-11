import {model} from './model'
import {Site} from './class/site'
import './style/main.css'
import { Sidebar } from './class/slidebar'

const site = new Site('#site')

site.render(model)

const sidebar = new Sidebar('#panel')