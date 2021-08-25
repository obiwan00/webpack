import './styles/index.scss'

import {initHeader} from './components'
import {initHomePage, initGridPage, initFlexPage} from './js/pages'

document.addEventListener('DOMContentLoaded', runAfterDomLoad)

function runAfterDomLoad(): void {
  initHeader()

  if (
    window.location.pathname === '/index.html' ||
    window.location.pathname === '/'
  ) {
    initHomePage()
  } else if (window.location.pathname === '/grid.html') {
    initGridPage()
  } else if (window.location.pathname === '/flex.html') {
    initFlexPage()
  }
}
