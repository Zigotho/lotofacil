import express from 'express'

import { Router, Request, Response } from 'express';

const app = express();

const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescripts' })
})

route.get('/results', (req: Request, res: Response) => {
  res.json({ message: 'Vou devolver a planilha aqui' })
})

app.use(route)


app.listen(3333, () => 'server running on port 3333')