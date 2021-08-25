import './styles/index.scss'

import {initHeader} from './components'
import {initHome} from './js/pages'

document.addEventListener('DOMContentLoaded', runAfterDomLoad)

function runAfterDomLoad(): void {
  initHeader()

  if (
    window.location.pathname === '/index.html' ||
    window.location.pathname === '/'
  ) {
    initHome()
  }
}
