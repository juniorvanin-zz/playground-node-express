import express from 'express'
import cors from 'cors'

import * as Products from './services/products'

const app = express()

const routers = express.Router()

routers.get('/products', (req, res) => (
  res.send(Products.getAll())
))

routers.get('/health', (req, res) => (
  res.status(200).end()
))

app.use(cors())
app.use('/v1', routers)
app.listen(8081)
