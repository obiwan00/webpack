import {FetchPetService} from '../../../services/fetch-pet.service'
import {createCard} from '../card'
import {getItemsGrid} from '../items-grid'

export async function initBreadsFetch(): Promise<void> {
  const appContentEl = document.getElementById('app-content')
  const fetchPetService = new FetchPetService()

  const pets = await fetchPetService.getBreads({limit: 20})
  const petsCards = pets.map((bread) => {
    return createCard({
      imgUrl: bread.image.url,
      title: bread.name,
      description: bread.description,
      link: {
        url: bread.wikipedia_url,
        title: 'Learn More',
        newTab: true,
      },
    }).outerHTML
  })
  const petsWrapper = getItemsGrid({
    title: 'Pet breads',
    bodyContent: petsCards.join(''),
  })
  appContentEl.append(petsWrapper)
}
