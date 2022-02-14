import { Restaurant } from '@prisma/client'
import UpdateRestaurantDTO from '@restaurants/dto/UpdateRestaurantDTO'
import IRestaurantsRepository from '@shared/repositories/IRestaurantsRespository'

export default class UpdateRestaurantUseCase {
  constructor(private restaurantsRepository: IRestaurantsRepository) {}

  async execute(
    userId: string,
    data: UpdateRestaurantDTO
  ): Promise<Restaurant> {
    const restaurant = await this.restaurantsRepository.findByUserId(userId)

    if (!restaurant) {
      throw new Error('Restaurant not found')
    }

    const updatedRestaurant = await this.restaurantsRepository.update(
      restaurant.id,
      data
    )

    return updatedRestaurant
  }
}
