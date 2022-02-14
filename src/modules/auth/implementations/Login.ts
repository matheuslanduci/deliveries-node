import LoginController from '@auth/controllers/LoginController'
import LoginUseCase from '@auth/useCases/LoginUseCase'
import UsersRepository from '@shared/repositories/implementations/UsersRepository'

const usersRepository = new UsersRepository()

const loginUseCase = new LoginUseCase(usersRepository)

const login = new LoginController(loginUseCase)

export default login
