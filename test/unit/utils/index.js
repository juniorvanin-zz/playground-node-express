import * as Utils from './../../../src/utils'
import expect from '../helpers/chaiSetup'

describe('utils', () => {

  beforeEach(() => {
    process.env.IGBD_API_TOKEN = 'some-igbd-token'
  })

  afterEach(() => {
    delete process.env.IGBD_API_TOKEN;
  })

  it('gets igbd token from enviroment varible', () => {
    expect(Utils.getIgbdToken()).to.be.equal('some-igbd-token')
  })
})
