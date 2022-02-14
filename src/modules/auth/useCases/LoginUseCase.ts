import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import LoginDTO from '@auth/dto/LoginDTO'
import IUsersRepository from '@shared/repositories/IUsersRepository'

export default class LoginUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: LoginDTO): Promise<string> {
    const user = await this.usersRepository.findByEmail(data.email)    

    if (!user) {
      throw new Error('User does not exist')
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password)

    if (!isPasswordValid) {
      throw new Error('Invalid password')
    }

    const token = jwt.sign({ sub: user.id }, 'secret', { expiresIn: '1d' })

    return token
  }
}
