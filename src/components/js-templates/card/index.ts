import {limitString} from '../../../utils'

interface Card {
  imgUrl: string
  title: string
  description: string
  link: {url: string; title: string; newTab: boolean}
}

export function createCard({
  imgUrl,
  title,
  description,
  link,
}: Card): HTMLElement {
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
