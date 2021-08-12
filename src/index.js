import './styles/index.scss'

import {initHeader, initBreadsFetch} from './components'
import {LoaderService} from './services/loader.service'

document.addEventListener('DOMContentLoaded', runAfterDomLoad)
function runAfterDomLoad() {
  const loader = new LoaderService()
  loader.switchOn()

  initHeader()
  initBreadsFetch()
  console.log('Hello world')
}
