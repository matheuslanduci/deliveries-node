import UpdateRestaurantUseCase from '../UpdateRestaurantUseCase'
import restaurantsRepositoryMock from '@shared/repositories/mocks/RestaurantsRepository.mock'
import usersRepositoryMock from '@shared/repositories/mocks/UsersRepository.mock'

describe('UpdateRestaurantUseCase', () => {
  it('should execute the use case', async () => {
    restaurantsRepositoryMock.findByUserId = jest.fn().mockResolvedValue({
      id: 'restaurant-id',
      title: 'Restaurant title',
      description: 'Restaurant description',
    })
    restaurantsRepositoryMock.update = jest.fn().mockResolvedValue({
      id: 'restaurant-id',
      title: 'Restaurant title',
      description: 'Restaurant description',
    })

    const updateRestaurantUseCase = new UpdateRestaurantUseCase(
      restaurantsRepositoryMock
    )

    const data = {
      id: 'restaurant-id',
      title: 'Restaurant title',
      description: 'Restaurant description',
    }

    const result = await updateRestaurantUseCase.execute('user-id', data)

    expect(restaurantsRepositoryMock.update).toHaveBeenCalledWith(
      'restaurant-id',
      data
    )
    expect(result).toEqual({
      id: 'restaurant-id',
      title: 'Restaurant title',
      description: 'Restaurant description',
    })
  })
})
