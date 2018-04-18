import express from 'express'
import cors from 'cors'

import ProductsController from './products/controllers/products'
import GamesController from './games/controllers/games'

const app = express()

const routers = express.Router()

routers.get('/products', ProductsController)
routers.get('/games', GamesController)

app.use(cors())
app.use('/v1', routers)
app.listen(8081)

module.exports = app
