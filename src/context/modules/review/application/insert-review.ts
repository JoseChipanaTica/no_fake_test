import { db } from '../../../../db/db'
import { ReviewSchema } from '../domain/review.schema'

export const insertReview = (doc: ReviewSchema) => {
  return db.insert('review', doc)
}
