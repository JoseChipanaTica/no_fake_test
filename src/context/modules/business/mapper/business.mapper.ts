import {
  BusinessExtraDataInterface,
  BusinessInterface,
  BusinessSchema,
  BusinessSchemaExtraData
} from '../domain/business.schema'

export const schemaToBusiness = (data: BusinessSchema): BusinessInterface => {
  return {
    _id: data._id.toString(),
    address: data.address,
    email:data.email,
    name:data.name,
    phone: data.phone,
    type: data.type,
    website: data.website
  }
}


export const schemaToBusinessExtraData = (data: BusinessSchemaExtraData): BusinessExtraDataInterface => {
  return {
    _id: data._id.toString(),
    address: data.address,
    avg: data.avg,
    email: data.email,
    name: data.name,
    numberReviews: data.numberReviews,
    phone: data.phone,
    type: data.type,
    website: data.website
  }
}
