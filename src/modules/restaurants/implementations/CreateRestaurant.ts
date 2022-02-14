import CreateRestaurantController from '@restaurants/controllers/CreateRestaurantController'
import CreateRestaurantUseCase from '@restaurants/useCases/CreateRestaurantUseCase'
import RestaurantsRepository from '@shared/repositories/implementations/RestaurantsRepository'
import UsersRepository from '@shared/repositories/implementations/UsersRepository'

const restaurantsRepository = new RestaurantsRepository()
const usersRepository = new UsersRepository()

const createRestaurantUseCase = new CreateRestaurantUseCase(
  restaurantsRepository,
  usersRepository
)

const createRestaurant = new CreateRestaurantController(createRestaurantUseCase)

export default createRestaurant
