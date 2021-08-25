export function initHeader(): void {
  const header = document.getElementById('header')
  if (!header) return

  const menuToggles = document.querySelectorAll('.js-toggle-menu')
  menuToggles.forEach((el) => {
    el.addEventListener('click', () => {
      header.classList.toggle('header--active')
    })
  })
}
