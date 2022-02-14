import { Request, Response } from 'express'
import Joi from 'joi'
import CreateRestaurantDTO from '@restaurants/dto/CreateRestaurantDTO'
import CreateRestaurantUseCase from '@restaurants/useCases/CreateRestaurantUseCase'

export default class CreateRestaurantController {
  constructor(private createRestaurantUseCase: CreateRestaurantUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const validationSchema = Joi.object<CreateRestaurantDTO>({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
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

    try {
      await this.createRestaurantUseCase.execute(request.body)

      return response.status(201).send()
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error',
      })
    }
  }
}
