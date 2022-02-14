import bcrypt from 'bcrypt'
import usersRepositoryMock from '@shared/repositories/mocks/UsersRepository.mock'
import LoginUseCase from '../LoginUseCase'

describe('LoginUseCase', () => {
  it('should execute the use case', async () => {
    usersRepositoryMock.findByEmail = jest.fn().mockResolvedValue({
      id: 'user-id',
      email: 'user@mail.com',
      password: bcrypt.hashSync('123456', 10),
    })

    const loginUseCase = new LoginUseCase(usersRepositoryMock)

    const data = {
      email: 'user@mail.com',
      password: '123456',
    }

    await loginUseCase.execute(data)

    expect(usersRepositoryMock.findByEmail).toHaveBeenCalledWith(
      'user@mail.com'
    )
  })
})
