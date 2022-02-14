import ListRestaurantsUseCase from '../ListRestaurantsUseCase'
import restaurantsRepositoryMock from '@shared/repositories/mocks/RestaurantsRepository.mock'

describe('ListRestaurantsUseCase', () => {
  it('should execute the use case', async () => {
    restaurantsRepositoryMock.findAll = jest.fn().mockResolvedValue([
      {
        id: 'restaurant-id',
        title: 'Restaurant title',
        description: 'Restaurant description',
      },
    ])

    const listRestaurantsUseCase = new ListRestaurantsUseCase(
      restaurantsRepositoryMock
    )

    const result = await listRestaurantsUseCase.execute(1)

    expect(restaurantsRepositoryMock.findAll).toHaveBeenCalled()
    expect(result).toEqual([
      {
        id: 'restaurant-id',
        title: 'Restaurant title',
        description: 'Restaurant description',
      },
    ])
  })
})
