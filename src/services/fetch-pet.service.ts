interface Bread {
  description: string
  image: {id: string; width: number; height: number; url: string}
  name: string
  origin: string
  wikipedia_url: string
  [key: string]: any
}

export class FetchPetService {
  private static _instance: FetchPetService
  private apiKey = '81779b4c-d834-4835-a460-a540a796b529'

  public constructor() {
    if (!FetchPetService._instance) {
      FetchPetService._instance = this
    }

    return FetchPetService._instance
  }

  public async getBreads({limit}): Promise<Bread[]> {
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
