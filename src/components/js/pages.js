import {LoaderService} from '../../services/loader.service'
import {initBreadsFetch} from '../index'

export async function initHome() {
  const loader = new LoaderService()
  loader.switchOn()
  await initBreadsFetch()
  loader.switchOff()
}
