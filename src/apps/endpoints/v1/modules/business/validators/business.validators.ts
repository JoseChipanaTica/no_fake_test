import Joi from 'joi'
import { OnlineBusinessDataInterface } from '../interfaces/online-business-data.interface'
import { PhysicalBusinessDataInterface } from '../interfaces/physical-business-data.interface'

export const onlineBusinessValidator = Joi.object<OnlineBusinessDataInterface>({
  name: Joi.string().max(75),
  website: Joi.string(),
  email: Joi.string()
})

export const physicalBusinessValidator = Joi.object<PhysicalBusinessDataInterface>({
  name: Joi.string().max(50),
  address: Joi.string(),
  phone: Joi.string(),
  email: Joi.string()
})
