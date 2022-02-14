import { Router } from 'express'
import login from '@auth/implementations/Login'

const router = Router()

router.post('/auth', (req, res) => {
  return login.handle(req, res)
})

export default router
