import { Router } from 'express'
import createRestaurant from '@restaurants/implementations/CreateRestaurant'
import listRestaurant from '@restaurants/implementations/ListRestaurants'
import showRestaurant from '@restaurants/implementations/ShowRestaurant'
import updateRestaurant from '@restaurants/implementations/UpdateRestaurant'
import deleteRestaurant from '@restaurants/implementations/DeleteRestaurant'
import AuthMiddleware from '@shared/middlewares/AuthMiddleware'
import RequestWithAuth from 'src/interfaces/RequestWithAuth'

const router = Router()

router.get('/restaurants', (req, res) => {
  return listRestaurant.handle(req, res)
})
router.get('/restaurants/:id', (req, res) => {
  return showRestaurant.handle(req, res)
})
router.post('/restaurants', (req, res) => {
  return createRestaurant.handle(req, res)
})
router.put('/restaurants', AuthMiddleware.handle, (req, res) => {
  return updateRestaurant.handle(req as RequestWithAuth, res)
})
router.delete('/restaurants', AuthMiddleware.handle, (req, res) => {
  return deleteRestaurant.handle(req as RequestWithAuth, res)
})

export default router
