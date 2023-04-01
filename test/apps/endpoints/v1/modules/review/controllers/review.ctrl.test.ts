import { app } from '../../../../../../../src/apps/app'
import { runDB } from '../../../../../../../src/db/db'

const request = require('supertest')
const assert = require('assert')

describe('CREATE Review', function() {

  it('should create a review about business ', async function() {
    const body = {
      data: {
        'text': 'Good service and very kind. We will back!',
        'rating': 4.5,
        'username': 'Jose Chipana',
        'businessId': '6427e68b899894ee270e58d4'
      }
    }

    await runDB()
    const response = await request(app)
      .post('/api/v1/review/')
      .send(body)

    assert.equal(response.status, 201)

  })
})
