import restaurantsRoutes from '../restaurants'

describe('RestaurantsRoutes', () => {
  it('should have all restaurants routes', () => {
    expect(restaurantsRoutes.stack).toHaveLength(5)

    expect(restaurantsRoutes.stack[0].route.path).toBe('/restaurants')
    expect(restaurantsRoutes.stack[0].route.methods['get']).toBeTruthy()

    expect(restaurantsRoutes.stack[1].route.path).toBe('/restaurants/:id')
    expect(restaurantsRoutes.stack[1].route.methods['get']).toBeTruthy()

    expect(restaurantsRoutes.stack[2].route.path).toBe('/restaurants')
    expect(restaurantsRoutes.stack[2].route.methods['post']).toBeTruthy()

    expect(restaurantsRoutes.stack[3].route.path).toBe('/restaurants')
    expect(restaurantsRoutes.stack[3].route.methods['put']).toBeTruthy()

    expect(restaurantsRoutes.stack[4].route.path).toBe('/restaurants')
    expect(restaurantsRoutes.stack[4].route.methods['delete']).toBeTruthy()
  })
})
