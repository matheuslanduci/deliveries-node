import { Request, Response } from 'express'
import Joi from 'joi'
import LoginUseCase from '@auth/useCases/LoginUseCase'
import LoginDTO from '@auth/dto/LoginDTO'

export default class LoginController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const validationSchema = Joi.object<LoginDTO>({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    })

    const { error } = validationSchema.validate(request.body)

    if (error) {
      return response.status(400).json({
        message: error.message,
        details: error.details,
      })
    }

    try {
      const token = await this.loginUseCase.execute(request.body)

      return response.json({ token })
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error',
      })
    }
  }
}
