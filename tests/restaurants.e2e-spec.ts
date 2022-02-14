import { Application } from 'express'
import App from 'src/app'
import request from 'supertest'
import faker from '@faker-js/faker'

describe('Restaurants (e2e)', () => {
  let server: Application
  let restaurant: any
  let token: string
  let email = faker.internet.email()
  let password = faker.internet.password()

  beforeAll(async () => {
    const app = new App()

    server = app.getHttpServer()
  })

  it('/restaurants (POST)', async () => {
    return request(server)
      .post('/restaurants')
      .send({
        title: 'Restaurant 1',
        description: 'Restaurant 1 description',
        email,
        password,
      })
      .then(response => {
        expect(response.status).toBe(201)
      })
  })

  it('/restaurants (GET)', async () => {
    return request(server)
      .get('/restaurants')
      .expect(200)
      .then(response => {
        expect(response.body).toBeInstanceOf(Array)
        expect(response.body.length).toBeGreaterThan(0)
        restaurant = response.body[0]
      })
  })

  it('/restaurants/:id (GET)', async () => {
    return request(server)
      .get(`/restaurants/${restaurant.id}`)
      .expect(200)
      .expect(res => {
        expect(res.body).toHaveProperty('title', 'Restaurant 1')
        expect(res.body).toHaveProperty(
          'description',
          'Restaurant 1 description'
        )
      })
  })

  it('/auth (POST)', async () => {
    return request(server)
      .post('/auth')
      .send({
        email,
        password,
      })
      .then(response => {
        token = response.body.token
        expect(response.status).toBe(200)
      })
  })

  it('/restaurants (PUT)', () => {
    return request(server)
      .put('/restaurants')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Restaurant 111',
        description: 'Restaurant 111 description',
      })
      .expect(200)
      .expect(res => {
        expect(res.body).toHaveProperty('title', 'Restaurant 111')
        expect(res.body).toHaveProperty(
          'description',
          'Restaurant 111 description'
        )
      })
  })

  it('/restaurants (DELETE)', () => {
    return request(server)
      .delete('/restaurants')
      .set('Authorization', `Bearer ${token}`)
      .expect(204)
  })
})
