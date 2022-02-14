import IRestaurantsRepository from '@shared/repositories/IRestaurantsRespository'
import IUsersRepository from '@shared/repositories/IUsersRepository'

export default class DeleteRestaurantUseCase {
  constructor(
    private restaurantsRepository: IRestaurantsRepository,
    private usersRepository: IUsersRepository
  ) {}

  async execute(userId: string): Promise<void> {
    await this.restaurantsRepository.deleteByUserId(userId)
    await this.usersRepository.delete(userId)
  }
}
