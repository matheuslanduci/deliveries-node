const restaurantRepositoryMock = {
  save: jest.fn() as any,
  findAll: jest.fn() as any,
  findById: jest.fn() as any,
  deleteByUserId: jest.fn() as any,
  findByUserId: jest.fn() as any,
  update: jest.fn() as any,
}

export default restaurantRepositoryMock
