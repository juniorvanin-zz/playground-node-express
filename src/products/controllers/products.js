import sleep from 'sleep'

import * as ProductsService from './../services/products'

export default (req, res) => {
  sleep.sleep(2)
  res.send(ProductsService.getAll())
}
