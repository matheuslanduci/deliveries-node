import { Prisma, User } from '@prisma/client'
import bcrypt from 'bcrypt'
import prismaClient from '@shared/providers/prisma'
import IUsersRepository from '../IUsersRepository'

export default class UsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User | undefined> {
    const user = await prismaClient.user.findFirst({
      where: { email },
    })

    return user || undefined
  }

  async save(data: Prisma.UserCreateInput): Promise<User> {
    const newPassword = await bcrypt.hash(data.password, 10)

    data.password = newPassword

    return prismaClient.user.create({
      data,
    })
  }

  async delete(id: string): Promise<void> {
    await prismaClient.user.deleteMany({
      where: { id },
    })
  }
}
