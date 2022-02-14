import UpdateRestaurantController from '@restaurants/controllers/UpdateRestaurantController'
import UpdateRestaurantUseCase from '@restaurants/useCases/UpdateRestaurantUseCase'
import RestaurantsRepository from '@shared/repositories/implementations/RestaurantsRepository'

const restaurantsRepository = new RestaurantsRepository()

const updateRestaurantUseCase = new UpdateRestaurantUseCase(
  restaurantsRepository
)

const updateRestaurant = new UpdateRestaurantController(updateRestaurantUseCase)

export default updateRestaurant
