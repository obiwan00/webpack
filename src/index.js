import './styles/index.scss'

import {initHeader} from './components'

document.addEventListener('DOMContentLoaded', runAfterDomLoad)
function runAfterDomLoad() {
  initHeader()
  console.log('Hello world')
}
