import { ReviewSchema } from './review.schema'
import { ObjectId } from 'mongodb'

export class Review {
  text: string
  rating: number
  username: string
  businessId: string

  constructor(text: string, rating: number, username: string, businessId: string) {
    this.text = text
    this.rating = rating
    this.username = username
    this.businessId = businessId
  }

  schema(): ReviewSchema {
    return {
      text: this.text,
      rating: this.rating,
      username: this.username,
      businessId: new ObjectId(this.businessId)
    }
  }
}
