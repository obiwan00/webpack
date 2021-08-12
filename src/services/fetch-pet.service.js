export class FetchPetService {
  constructor() {
    if (!FetchPetService._instance) {
      FetchPetService._instance = this
    }

    this.apiKey = '81779b4c-d834-4835-a460-a540a796b529'

    return FetchPetService._instance
  }

  async getBreads({limit}) {
    const res = await fetch(
      `https://api.thecatapi.com/v1/breeds?limit=${limit}`,
      {
        headers: {
          'x-api-key': this.apiKey,
        },
      }
    )
    return await res.json()
  }
}
