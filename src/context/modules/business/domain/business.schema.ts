import { ObjectId } from 'mongodb'

export interface BusinessSchema {
  _id: ObjectId
  name: string
  website: string
  address: string
  phone: string
  email: string
  type: string
}

export interface BusinessSchemaExtraData {
  _id: ObjectId
  name: string
  website: string
  address: string
  phone: string
  email: string
  type: string
  avg: number
  numberReviews: number
}

export interface BusinessData {
  name: string
  website: string
  address: string
  phone: string
  email: string
  type: string
}

export interface BusinessInterface {
  _id: string
  name: string
  website: string
  address: string
  phone: string
  email: string
  type: string
}

export interface BusinessExtraDataInterface {
  _id: string
  name: string
  website: string
  address: string
  phone: string
  email: string
  type: string,
  avg: number,
  numberReviews: number
}
