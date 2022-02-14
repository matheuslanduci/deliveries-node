import DeleteRestaurantController from '@restaurants/controllers/DeleteRestaurantController'
import DeleteRestaurantUseCase from '@restaurants/useCases/DeleteRestaurantUseCase'
import RestaurantsRepository from '@shared/repositories/implementations/RestaurantsRepository'
import UsersRepository from '@shared/repositories/implementations/UsersRepository'

const restaurantsRepository = new RestaurantsRepository()
const usersRepository = new UsersRepository()

const deleteRestaurantUseCase = new DeleteRestaurantUseCase(
  restaurantsRepository,
  usersRepository
)

const deleteRestaurant = new DeleteRestaurantController(deleteRestaurantUseCase)

export default deleteRestaurant
