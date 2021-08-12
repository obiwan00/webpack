/**
 * Create card html
 * @param {object} params
 * @param {string} params.url
 * @param {string} params.title
 * @param {object} params.link
 * @param {string} params.link.title
 * @param {string} params.link.url
 * @param {boolean} params.link.newTab
 * @return {HTMLElement}
 */
export function createCard({imgUrl, title, description, link}) {
  const card = document.createElement('div')
  card.classList.add('card')
  card.innerHTML = `
      <div class="card__img">
        <img src="${imgUrl}" alt="dog">
      </div>
      <h3 class="card__title">${title}</h3>
      <div class="card__description">${limitString(description)}</div>
      <a target="${
        link.newTab ? '_blank' : '_self'
      }" class="btn card__btn" href="${link.url}">${link.title}</a>
  `.trim()
  return card
}

function limitString(
  str,
  {maxLen, endingStr} = {maxLen: 80, endingStr: '...'}
) {
  if (str.length > maxLen) {
    const replacerRegExp = new RegExp(`^(.{${maxLen}}\\S*)(.*)`, 'gi')
    const trimmedString = str.replace(replacerRegExp, '$1')
    return `${trimmedString} ${endingStr}`
  }
  return str
}
