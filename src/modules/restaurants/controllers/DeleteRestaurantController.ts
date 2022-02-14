import { Response } from 'express'
import DeleteRestaurantUseCase from '@restaurants/useCases/DeleteRestaurantUseCase'
import RequestWithAuth from 'src/interfaces/RequestWithAuth'

export default class DeleteRestaurantController {
  constructor(
    private readonly deleteRestaurantUseCase: DeleteRestaurantUseCase
  ) {}

  async handle(
    request: RequestWithAuth,
    response: Response
  ): Promise<Response> {
    const user = request.user

    try {
      await this.deleteRestaurantUseCase.execute(user.id)

      return response.status(204).send()
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error',
      })
    }
  }
}
