export class LoaderService {
  constructor() {
    if (!LoaderService._instance) {
      LoaderService._instance = this
    }

    this.loader = document.getElementById('loader')
    this.loaderActiveClass = 'loader--active'

    return LoaderService._instance
  }

  switchOff() {
    this.loader.classList.remove(this.loaderActiveClass)
  }

  switchOn() {
    this.loader.classList.add(this.loaderActiveClass)
  }
}
