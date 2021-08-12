/**
 * Create card html
 * @param {object} params
 * @param {string} params.title
 * @param {string} params.bodyContent
 * @return {HTMLElement}
 */

export function getItemsGrid({title, bodyContent}) {
  const itemsGrid = document.createElement('section')
  itemsGrid.classList.add('items-grid')
  itemsGrid.innerHTML = `
    <div class="items-grid__container container">
      <div class="items-grid__head">
        <h2>${title}</h2>
      </div>
      <div class="items-grid__body">
        ${bodyContent}
      </div>
    </div>
  `.trim()
  return itemsGrid
}
