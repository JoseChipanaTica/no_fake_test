import { database } from '../connection'

export const createBusinessCollection = () => {
  const name = 'business'
  if (!database.collection(name))
    return database.createCollection(name, {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          title: 'Business Schema Validation',
          required: ['name', 'type'],
          properties: {
            name: {
              bsonType: 'string',
              description: '"name" must to be a string and is required',
              maxLength: 75
            },
            type: {
              bsonType: 'string',
              enum: ['online', 'physical'],
              description: '"type" must to be a string and is required'
            },
            email: {
              bsonType: 'string',
              description: '"email" must to be a string and is required'
            },
            address: {
              bsonType: 'string',
              description: '"address" must to be a string and is required'
            },
            phone: {
              bsonType: 'string',
              description: '"phone" must to be a string and is required'
            },
            numberReview: {
              bsonType: 'int',
              description: '"numberReview" must to be an int and is required'
            }
          }
        }
      }
    })

  return null
}
