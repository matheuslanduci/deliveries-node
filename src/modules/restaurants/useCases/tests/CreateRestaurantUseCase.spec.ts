import CreateRestaurantUseCase from '../CreateRestaurantUseCase'
import restaurantsRepositoryMock from '@shared/repositories/mocks/RestaurantsRepository.mock'
import usersRepositoryMock from '@shared/repositories/mocks/UsersRepository.mock'

describe('CreateRestaurantUseCase', () => {
  it('should execute the use case', async () => {
    usersRepositoryMock.save = jest.fn().mockResolvedValue({
      id: 'user-id',
      email: 'restaurant@mail.com',
      password: '123456',
    })
    restaurantsRepositoryMock.save = jest.fn().mockResolvedValue({
      id: 'restaurant-id',
      title: 'Restaurant title',
      description: 'Restaurant description',
    })

    const createRestaurantUseCase = new CreateRestaurantUseCase(
      restaurantsRepositoryMock,
      usersRepositoryMock
    )

    const data = {
      title: 'Restaurant title',
      description: 'Restaurant description',
      email: 'restaurant@mail.com',
      password: '123456',
    }

    await createRestaurantUseCase.execute(data)

    expect(restaurantsRepositoryMock.save).toHaveBeenCalledWith({
      title: 'Restaurant title',
      description: 'Restaurant description',
      user: {
        connect: { id: 'user-id' },
      },
    })
  })
})
