import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send('You are on api route')
})

export default router
