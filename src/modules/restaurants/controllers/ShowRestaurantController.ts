import { Request, Response } from 'express'
import ShowRestaurantUseCase from '@restaurants/useCases/ShowRestaurantUseCase'

export default class ShowRestaurantController {
  constructor(private readonly showRestaurantUseCase: ShowRestaurantUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    try {
      const restaurant = await this.showRestaurantUseCase.execute(id)

      return response.json(restaurant)
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error',
      })
    }
  }
}
