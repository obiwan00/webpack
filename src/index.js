import './styles/index.scss'

import {initHeader, initBreadsFetch} from './components'
import {LoaderService} from './services/loader.service'

document.addEventListener('DOMContentLoaded', runAfterDomLoad)
function runAfterDomLoad() {
  initHeader()
  if (
    window.location.pathname === '/index.html' ||
    window.location.pathname === '/'
  ) {
    const loader = new LoaderService()
    loader.switchOn()
    initBreadsFetch()
  }
}
