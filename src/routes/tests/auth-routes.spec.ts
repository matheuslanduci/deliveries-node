import authRoutes from '../auth'

describe('AuthRoutes', () => {
  it('should have all auth routes', () => {
    expect(authRoutes.stack).toHaveLength(1)

    expect(authRoutes.stack[0].route.path).toBe('/auth')
  })
})
