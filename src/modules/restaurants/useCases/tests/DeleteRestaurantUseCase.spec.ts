import DeleteRestaurantUseCase from '../DeleteRestaurantUseCase'
import restaurantsRepositoryMock from '@shared/repositories/mocks/RestaurantsRepository.mock'
import usersRepositoryMock from '@shared/repositories/mocks/UsersRepository.mock'

describe('DeleteRestaurantUseCase', () => {
  it('should execute the use case', async () => {
    restaurantsRepositoryMock.deleteByUserId = jest.fn().mockResolvedValue({})
    usersRepositoryMock.delete = jest.fn().mockResolvedValue({})

    const deleteRestaurantUseCase = new DeleteRestaurantUseCase(
      restaurantsRepositoryMock,
      usersRepositoryMock
    )

    await deleteRestaurantUseCase.execute('user-id')

    expect(restaurantsRepositoryMock.deleteByUserId).toHaveBeenCalledWith(
      'user-id'
    )
    expect(usersRepositoryMock.delete).toHaveBeenCalledWith('user-id')
  })
})
