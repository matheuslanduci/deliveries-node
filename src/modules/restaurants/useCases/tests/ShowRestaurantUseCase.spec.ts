import ShowRestaurantUseCase from '../ShowRestaurantUseCase'
import restaurantsRepositoryMock from '@shared/repositories/mocks/RestaurantsRepository.mock'

describe('ShowRestaurantUseCase', () => {
  it('should execute the use case', async () => {
    restaurantsRepositoryMock.findById = jest.fn().mockResolvedValue({
      id: 'restaurant-id',
      title: 'Restaurant title',
      description: 'Restaurant description',
    })

    const showRestaurantUseCase = new ShowRestaurantUseCase(
      restaurantsRepositoryMock
    )

    const result = await showRestaurantUseCase.execute('restaurant-id')

    expect(restaurantsRepositoryMock.findById).toHaveBeenCalledWith(
      'restaurant-id'
    )
    expect(result).toEqual({
      id: 'restaurant-id',
      title: 'Restaurant title',
      description: 'Restaurant description',
    })
  })
})
