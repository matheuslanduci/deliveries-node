import { User } from '@prisma/client'
import { Request } from 'express'

export default interface RequestWithAuth extends Request {
  user: User
}
