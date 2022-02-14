import { Prisma, User } from '@prisma/client'

export default interface IUsersRepository {
  findByEmail(email: string): Promise<User | undefined>
  save(data: Prisma.UserCreateInput): Promise<User>
  delete(id: string): Promise<void>
}
