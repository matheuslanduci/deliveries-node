import { Request, Response } from 'express'
import Joi from 'joi'
import UpdateRestaurantUseCase from '@restaurants/useCases/UpdateRestaurantUseCase'
import UpdateRestaurantDTO from '@restaurants/dto/UpdateRestaurantDTO'
import RequestWithAuth from 'src/interfaces/RequestWithAuth'

export default class UpdateRestaurantController {
  constructor(
    private readonly updateRestaurantUseCase: UpdateRestaurantUseCase
  ) {}

  async handle(
    request: RequestWithAuth,
    response: Response
  ): Promise<Response> {
    const validationSchema = Joi.object<UpdateRestaurantDTO>({
      title: Joi.string().required(),
      description: Joi.string().required(),
    })

    const { error } = validationSchema.validate(request.body)

    if (error) {
      return response.status(400).json({
        message: error.message,
        details: error.details,
      })
    }

    const user = request.user

    try {
      const restaurant = await this.updateRestaurantUseCase.execute(
        user.id,
        request.body
      )

      return response.json(restaurant)
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error',
      })
    }
  }
}
