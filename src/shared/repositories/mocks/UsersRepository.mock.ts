const usersRepositoryMock = {
  findByEmail: jest.fn() as any,
  save: jest.fn() as any,
  delete: jest.fn() as any,
}

export default usersRepositoryMock
