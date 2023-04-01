import { app } from '../../../../../../../src/apps/app'
import { runDB } from '../../../../../../../src/db/db'

const request = require('supertest')
const assert = require('assert')
const { expect } = require('chai')


describe('GET BUSINESS', function() {

  it('should return status 200', async function() {
    await runDB()
    const response = await request(app)
      .get('/api/v1/business/6427e68b899894ee270e58d4')
      .set('Accept', 'application/json')

    assert.equal(response.status, 200)
  })

  it('should return data', async function() {
    await runDB()
    const response = await request(app)
      .get('/api/v1/business/6427e68b899894ee270e58d4')
      .set('Accept', 'application/json')

    expect(response.body).to.deep.equal({
      _id: '6427e68b899894ee270e58d4',
      address: 'Calle Madrid 15 L-1',
      email: 'example@example.com',
      name: 'AWS Business',
      phone: '632401366',
      type: 'physical',
      website: ''
    })
  })

  it('should return business information with extra data', async function() {
    await runDB()
    const response = await request(app)
      .get('/api/v1/business/businessFeatures/6427e68b899894ee270e58d4')
      .set('Accept', 'application/json')

    const { avg } = response.body
    assert.strictEqual(typeof avg, 'number')
  })

})


describe('CREATE BUSINESS', function() {

  it('should create a physical business ', async function() {
    const body = {
      data: {
        name: 'Online Business',
        address: 'Calle Madrid 15 L-1',
        phone: '632401366',
        email: 'example@example.com'
      }
    }

    await runDB()
    const response = await request(app)
      .post('/api/v1/business/physical-business')
      .send(body)

    assert.equal(response.status, 201)

  })

  it('should create a online business ', async function() {
    const body = {
      data: {
        name: 'Online Business',
        website: 'www.no-fakes.ai',
        email: 'example@example.com'
      }
    }

    await runDB()
    const response = await request(app)
      .post('/api/v1/business/online-business')
      .send(body)

    assert.equal(response.status, 201)

  })
})
