import { Request, Response } from 'express'
import ListRestaurantsUseCase from '@restaurants/useCases/ListRestaurantsUseCase'

export default class ListRestaurantsController {
  constructor(private listRestaurantsUseCase: ListRestaurantsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1

    const restaurants = await this.listRestaurantsUseCase.execute(page)

    return response.status(200).json(restaurants)
  }
}
