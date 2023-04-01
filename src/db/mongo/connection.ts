import { Db, MongoClient } from 'mongodb'
import { createReviewCollection } from './collections/review.collection'
import { createBusinessCollection } from './collections/business.collection'
import { DatabaseInterface } from '../database.interface'
import QueryMongoDB from './queryMongoDB'

export let database: Db
export let queries: DatabaseInterface

export const mConnect = async (connection: string): Promise<boolean> => {
  return new Promise(async (resolve, reject) => {
    try {
      const mongoConnector = new MongoClient(connection)
      const connector = await mongoConnector.connect()
      database = connector.db('NoFakes')
      queries = QueryMongoDB
      await Promise.all([
        createReviewCollection(),
        createBusinessCollection()
      ])
      resolve(true)
    } catch (e) {
      reject(e)
    }
  })
}
