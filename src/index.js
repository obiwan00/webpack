import './styles/index.scss'

import {initHeader, initHome} from './components'

document.addEventListener('DOMContentLoaded', runAfterDomLoad)
async function runAfterDomLoad() {
  initHeader()

  if (
    window.location.pathname === '/index.html' ||
    window.location.pathname === '/'
  ) {
    initHome()
  }
}
