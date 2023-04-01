import { app } from '../../src/apps/app'

const request = require('supertest')
const assert = require('assert')


describe('GET /', function() {
  it('should return status 200', async function() {
    const response = await request(app)
      .get('/')
      .set('Accept', 'application/json')
    assert.equal(response.status, 200)
  })
})
