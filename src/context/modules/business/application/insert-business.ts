import { db } from '../../../../db/db'
import { BusinessData } from '../domain/business.schema'

export const insertBusiness = (doc: BusinessData) => {
  return db.insert('business', doc)
}
