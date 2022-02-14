import { Restaurant } from '@prisma/client'
import IRestaurantsRepository from '@shared/repositories/IRestaurantsRespository'

export default class ShowRestaurantUseCase {
  constructor(private restaurantsRepository: IRestaurantsRepository) {}

  async execute(id: string): Promise<Restaurant> {
    const restaurant = await this.restaurantsRepository.findById(id)

    if (!restaurant) {
      throw new Error('Restaurant not found')
    }

    return restaurant
  }
}
