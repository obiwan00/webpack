export class LoaderService {
  private static _instance: LoaderService
  private loader: HTMLElement
  private loaderActiveClass = 'loader--active'

  public constructor() {
    if (!LoaderService._instance) {
      LoaderService._instance = this
    }

    this.loader = document.getElementById('loader')

    return LoaderService._instance
  }

  public switchOff(): void {
    this.loader.classList.remove(this.loaderActiveClass)
  }

  public switchOn(): void {
    this.loader.classList.add(this.loaderActiveClass)
  }
}
