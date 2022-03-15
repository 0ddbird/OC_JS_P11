interface IAccomodation {
    id: string
    title: string
    cover: string
    pictures: string[]
    description: string
    host: {
      name: string
      picture: string
    }
    rating: string
    location: string
    equipments: string[]
    tags: string[]
  }

interface IAccomodations extends Array<IAccomodation>{}

export { IAccomodations }
