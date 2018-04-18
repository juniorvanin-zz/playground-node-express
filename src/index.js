import express from 'express'
import cors from 'cors'
import sleep from 'sleep'

import * as Products from './services/products'
import * as Games from './services/games'

const app = express()

const routers = express.Router()

routers.get('/products', (req, res) => {
  sleep.sleep(2)
  res.send(Products.getAll())
})

routers.get('/games', (req, res) => {
  Games.getAll().then(
    (result) => {
      res.send(result.body)
    }
  )
})

routers.get('/health', (req, res) => (
  res.status(200).end()
))

app.use(cors())
app.use('/v1', routers)
app.listen(8081)
