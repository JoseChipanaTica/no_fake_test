import assert = require('assert')
import { app } from '../../src/apps/app'
import { runDB } from '../../src/db/db'

const request = require('supertest')


describe('Test DB connection', function() {
  it('should return successful connection', async function() {
    this.timeout(5000)
    const res = await runDB()
    await request(app)
    assert.equal(res, true)
  })
})
