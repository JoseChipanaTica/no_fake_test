import * as mongoDB from 'mongodb'
import { FindOptions, ObjectId } from 'mongodb'
import { database } from './connection'
import { DatabaseInterface } from '../database.interface'

class QueryMongoDB implements DatabaseInterface {
  static instance: QueryMongoDB | undefined

  private constructor() {
  }

  static getInstance(): QueryMongoDB {
    if (this.instance) {
      return this.instance
    }
    this.instance = new QueryMongoDB()
    return this.instance
  }

  getById(collection_name: string, id: string): Promise<any> {
    if (!ObjectId.isValid(id))
      throw ('Id is not valid')
    return new Promise(async (resolve, reject) => {
      try {
        const collection = this.collection(collection_name)
        const doc = await collection.findOne({ _id: new mongoDB.ObjectId(id) }, {})

        if (doc) {
          resolve(doc)
        } else {
          reject()
        }
      } catch (e) {
        reject(e)
      }
    })
  }

  getAll(collection_name: string, filter: {} = {}, options: FindOptions = {}): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const collection = this.collection(collection_name)
        collection.find(filter, options).toArray()
          .then(docs => {
            resolve(docs)
          })
          .catch(e => {
            reject(e)
          })
      } catch (e) {
        reject(e)
      }
    })
  }

  insert(collection_name: string, document: {}): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const collection = this.collection(collection_name)
        const doc = await collection.insertOne(document)
        resolve(doc)
      } catch (e) {
        reject(e)
      }
    })
  }

  update(collection_name: string, doc_id: string, document: {}): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const collection = this.collection(collection_name)
        const updated = await collection.updateOne({ _id: new ObjectId(doc_id) }, { $set: document })
        resolve(updated)
      } catch (e) {
        reject(e)
      }
    })
  }

  updateMany(collection_name: string, filter: {} = {}, document: {} = {}): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const collection = this.collection(collection_name)
        const updated = await collection.updateMany(filter, { $set: document })
        resolve(updated)
      } catch (e) {
        reject(e)
      }
    })
  }

  delete(collection_name: string, doc_id: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const collection = this.collection(collection_name)
        await collection.deleteOne({ _id: new ObjectId(doc_id) })
        resolve(true)
      } catch (e) {
        reject(e)
      }
    })
  }

  aggregate(collection_name: string, pipeline: Array<any>): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const collection = this.collection(collection_name)
        collection.aggregate(pipeline).toArray()
          .then(res => {
            resolve(res)
          })
      } catch (e) {
        reject(e)
      }
    })
  }

  collection(collection_name: string) {
    return database.collection(collection_name)
  }
}

const queryMongoDB = QueryMongoDB.getInstance()

export default queryMongoDB
