import axios from 'axios'
import { getIgdbToken } from './../../utils/'

const buildRequestConfig = () => (
  {
    'headers': {
      'user-key': getIgdbToken(),
      'Accept': 'application/json'
    }
  }
)

const getAll = () => {
  return axios.get('https://api-endpoint.igdb.com/games/?fields=*&limit=10', buildRequestConfig())
  .then(
    response => {
      return response.data
    }
  )
}

export {
  getAll
}
