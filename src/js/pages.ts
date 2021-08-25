import {LoaderService} from '../services/loader.service'
import {initBreadsFetch} from '../components/index'

export async function initHome(): Promise<void> {
  const loader = new LoaderService()
  loader.switchOn()
  await initBreadsFetch()
  loader.switchOff()
}
