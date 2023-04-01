import { db } from '../../../../db/db'
import { ObjectId } from 'mongodb'
import { schemaToBusiness, schemaToBusinessExtraData } from '../mapper/business.mapper'
import { BusinessExtraDataInterface, BusinessSchema, BusinessSchemaExtraData } from '../domain/business.schema'

export const getBusiness = async (id: string) => {
  const business = await db.getById<BusinessSchema>('business', id)
  return schemaToBusiness(business)
}

export const getBusinessFeatures = async (id: string): Promise<BusinessExtraDataInterface> => {
  const pipes = [
    {
      $match: {
        _id: new ObjectId(id)
      }
    },
    {
      $lookup: {
        from: 'review',
        localField: '_id',
        foreignField: 'businessId',
        pipeline: [
          {
            $group: {
              _id: null,
              avg: { $avg: '$rating' },
              numberReview: { $sum: 1 }
            }
          }
        ],
        as: 'review'
      }
    },
    {
      $addFields: {
        avg: {
          $round: [{ $arrayElemAt: ['$review.avg', 0] }, 1]
        },
        numberReview: { $arrayElemAt: ['$review.numberReview', 0] }
      }
    },
    {
      $project: {
        review: 0
      }
    }
  ]
  const business = await db.aggregate<Array<BusinessSchemaExtraData>>('business', pipes)
  if (business.length > 0) {
    return schemaToBusinessExtraData(business[0])
  }
  throw 'Business Not was founded'
}
