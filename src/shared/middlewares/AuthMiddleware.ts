import prismaClient from '@shared/providers/prisma'
import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export default class AuthMiddleware {
  public static async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const authHeader = request.headers.authorization

    if (!authHeader) {
      return response.status(401).json({
        message: 'Token not provided',
      })
    }

    const [, token] = authHeader.split(' ')

    try {
      const decoded = jwt.verify(token, 'secret')

      const { sub } = decoded as { sub: string }

      const user = prismaClient.user.findUnique({
        where: {
          id: sub,
        },
      })

      if (!user) {
        return response.status(401).json({
          message: 'User not found',
        })
      }

      request = Object.assign(request, {
        user,
      })

      return next()
    } catch (error) {
      return response.status(401).json({
        message: 'Invalid token',
      })
    }
  }
}
