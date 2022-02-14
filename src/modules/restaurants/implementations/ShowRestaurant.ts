import ShowRestaurantController from '@restaurants/controllers/ShowRestaurantController'
import ShowRestaurantUseCase from '@restaurants/useCases/ShowRestaurantUseCase'
import RestaurantsRepository from '@shared/repositories/implementations/RestaurantsRepository'

const restaurantsRepository = new RestaurantsRepository()

const showRestaurantUseCase = new ShowRestaurantUseCase(restaurantsRepository)

const showRestaurant = new ShowRestaurantController(showRestaurantUseCase)

export default showRestaurant
