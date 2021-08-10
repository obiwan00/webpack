import './header.scss'
import './nav/nav.scss'

export function initHeader() {
  const header = document.getElementById('header')
  if (!header) return

  const menuToggles = document.querySelectorAll('.js-toggle-menu')

  menuToggles.forEach((el) => {
    console.log({el})
    el.addEventListener('click', toggleMenu)
  })

  function toggleMenu() {
    console.log('click')
    header.classList.toggle('header--active')
  }
}
