import { mConnect, queries } from './mongo/connection'
import { DatabaseInterface } from './database.interface'

export let db: DatabaseInterface

/**
 * Connect with the DB and enable CRUD queries
 */
export const runDB = async () => {
  return new Promise((resolve, reject) => {
    mConnect(process.env.MONGO_URI!)
      .then(() => {
        console.log('DB connected')
        db = queries
        resolve(true)
      })
      .catch(e => {
        console.log('Error: ' + e)
        reject(e)
      })
  })
}
