import express, { Application, Request, Response } from 'express'

// import routes
import apiRoute from './routes/api'

const app: Application = express()

app.use('/api', apiRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello there, go /api</h1>')
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
