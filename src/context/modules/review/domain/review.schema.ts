import { ObjectId } from 'mongodb'

export interface ReviewSchema {
  text: string
  rating: number,
  username: string,
  businessId: ObjectId
}
