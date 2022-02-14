import { Restaurant } from '@prisma/client'
import IRestaurantsRepository from '@shared/repositories/IRestaurantsRespository'

export default class ListRestaurantsUseCase {
  constructor(private restaurantsRepository: IRestaurantsRepository) {}

  async execute(page: number): Promise<Restaurant[]> {
    const restaurants = await this.restaurantsRepository.findAll(page)

    return restaurants
  }
}
