import CreateRestaurantDTO from '@restaurants/dto/CreateRestaurantDTO'
import IRestaurantsRepository from '@shared/repositories/IRestaurantsRespository'
import IUsersRepository from '@shared/repositories/IUsersRepository'

export default class CreateRestaurantUseCase {
  constructor(
    private restaurantsRepository: IRestaurantsRepository,
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: CreateRestaurantDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    const user = await this.usersRepository.save({
      email: data.email,
      password: data.password,
      accountType: 'RESTAURANT',
    })

    await this.restaurantsRepository.save({
      title: data.title,
      description: data.description,
      user: {
        connect: { id: user.id },
      },
    })
  }
}
