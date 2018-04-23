import * as GameService from './../services/games'

export default (req, res) =>
  GameService.getAll()
    .then((result) => {
      res.send(result)
    })
