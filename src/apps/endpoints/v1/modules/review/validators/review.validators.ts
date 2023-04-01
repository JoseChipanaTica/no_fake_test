import Joi from 'joi'
import { ReviewDataInterface } from '../interfaces/review-data.interface'

export const reviewValidator = Joi.object<ReviewDataInterface>({
  text: Joi.string().min(20).max(500),
  rating: Joi.number().min(1).max(5),
  username: Joi.string(),
  businessId: Joi.string()
})
