import ListRestaurantsController from '@restaurants/controllers/ListRestaurantsController'
import ListRestaurantsUseCase from '@restaurants/useCases/ListRestaurantsUseCase'
import RestaurantsRepository from '@shared/repositories/implementations/RestaurantsRepository'

const restaurantsRepository = new RestaurantsRepository()

const listRestaurantsUseCase = new ListRestaurantsUseCase(restaurantsRepository)

const listRestaurants = new ListRestaurantsController(listRestaurantsUseCase)

export default listRestaurants
