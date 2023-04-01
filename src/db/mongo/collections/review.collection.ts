import { database } from '../connection'

export const createReviewCollection = () => {
  const name = 'review'
  if (!database.collection(name))
    return database.createCollection(name, {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          title: 'Review Schema Validation',
          required: ['text', 'rating', 'username', 'businessId'],
          properties: {
            text: {
              bsonType: 'string',
              description: '"text" must be a string and is required',
              maxLength: 500,
              minLength: 20
            },
            rating: {
              bsonType: 'int64',
              description: '"rating" must be an int and is required',
              minimum: 1,
              maximum: 5
            },
            username: {
              bsonType: 'string',
              description: '"username" must be a string and is required'
            },
            businessId: {
              bsonType: 'objectId',
              description: '"text" must be an ObjectId and is required'
            }
          }
        }
      }
    })

  return null
}
