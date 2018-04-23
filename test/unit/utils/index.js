import * as Utils from './../../../src/utils'
import expect from '../helpers/chaiSetup'

describe('utils', () => {

  beforeEach(() => {
    process.env.IGDB_API_TOKEN = 'some-igdb-token'
  })

  afterEach(() => {
    delete process.env.IGDB_API_TOKEN;
  })

  it('gets igdb token from enviroment varible', () => {
    expect(Utils.getIgdbToken()).to.be.equal('some-igdb-token')
  })
})
