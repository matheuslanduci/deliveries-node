import express, { Application } from 'express'
import cors from 'cors'

import restaurantRoutes from './routes/restaurants'
import authRoutes from './routes/auth'

export default class App {
  private app: Application

  constructor() {
    this.app = express()

    this.setMiddlewares()
    this.setRoutes()
  }

  private setMiddlewares() {
    this.app.use(express.json())
    this.app.use(cors())
  }

  private setRoutes() {
    this.app.use(restaurantRoutes)
    this.app.use(authRoutes)
  }

  public getHttpServer(): Application {
    return this.app
  }

  init() {
    this.app.listen(3333, () => {
      console.log('Application has been initialized 🚀')
    })
  }
}
