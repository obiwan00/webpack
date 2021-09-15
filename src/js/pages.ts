import {LoaderService} from '../services/loader.service'
import {initBreadsFetch} from '../components/index'
import {
  appendArrayElementsIntoBlockOneByOne,
  getSortedByDateChildren,
} from '../utils'

export async function initHomePage(): Promise<void> {
  const loader = new LoaderService()
  loader.switchOn()
  await initBreadsFetch()
  loader.switchOff()
}

export async function initGridPage(): Promise<void> {
  const parentBlockSelector = '.grid-section__container'
  const parentBlock = document.querySelector(parentBlockSelector)
  const newestItemClassName = 'the-newest-item'

  const sortedByDateChildren = getSortedByDateChildren(parentBlock)
  const newestChild = sortedByDateChildren[0]
  newestChild.classList.add(newestItemClassName)
}

export async function initFlexPage(): Promise<void> {
  const parentBlockSelector = '.flex-section__container'
  const parentBlock = document.querySelector(parentBlockSelector)
  const newestItemClassName = 'the-newest-item'

  const sortedByDateChildren = getSortedByDateChildren(parentBlock)
  appendArrayElementsIntoBlockOneByOne(parentBlock, sortedByDateChildren)

  const newestChild = sortedByDateChildren[0]
  newestChild.classList.add(newestItemClassName)
}
