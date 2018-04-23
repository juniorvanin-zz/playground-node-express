import sinon from 'sinon'
import axios from 'axios'
import expect from '../../helpers/chaiSetup'

import * as GamesService from './../../../../src/games/services/games'
import * as Utils from './../../../../src/utils'

describe('games service', () => {
  var axiosStub
  var utilsStub

  beforeEach(() => {
    const igdbResponse = buildIgdbDummyResponse()

    axiosStub = sinon.stub(axios, 'get').returns(Promise.resolve(igdbResponse))
    utilsStub = sinon.stub(Utils, 'getIgdbToken').returns("some-igdb-token")
  })

  afterEach(() => {
    axiosStub.restore()
    utilsStub.restore()
  })

  it('calls IGDB api with correct url', (done) => {
    GamesService.getAll().then(
      response => {
        axiosStub.should.have.been.calledWith('https://api-endpoint.igdb.com/games/?fields=*&limit=10')
      }
    ).then(done, done)
  })

  it('calls IGDB api with request headers', (done) => {
    const expectedRequestConfig = {
      headers: {
        'user-key': "some-igdb-token",
        'Accept': 'application/json'
      }
    }

    GamesService.getAll().then(
      response => {
        axiosStub.should.have.been.calledWith('https://api-endpoint.igdb.com/games/?fields=*&limit=10', expectedRequestConfig)
      }
    ).then(done, done)
  })

  it('get all latest games from IGDB', (done) => {
    GamesService.getAll()
    .then(
      response => {
        expect(response).not.to.be.empty
      }
    ).then(done, done)
  })

  const buildIgdbDummyResponse = () => {
    return {
      data: [
        {
          "id": 10792,
          "name": "Player Character",
          "created_at": 1502310892374,
          "updated_at": 1521329882361,
          "slug": "player-character",
          "url": "https://www.igdb.com/characters/player-character",
          "mug_shot": {
             "url": "//images.igdb.com/igdb/image/upload/t_thumb/xtpfl3rt0arq9hvqjsuu.jpg",
             "cloudinary_id": "xtpfl3rt0arq9hvqjsuu",
             "width": 1919,
             "height": 1076
          },
          "gender": 1,
          "species": 1,
          "people": [
             128834,
             27811
          ]
        }
      ]
    }
  }
})
