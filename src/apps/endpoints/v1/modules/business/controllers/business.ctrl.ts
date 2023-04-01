import { Request, Response } from 'express'
import { onlineBusinessValidator, physicalBusinessValidator } from '../validators/business.validators'
import {
  BusinessBuilder
} from '../../../../../../context/modules/business/domain/business.builder'
import { insertBusiness } from '../../../../../../context/modules/business/application/insert-business'
import { getBusiness, getBusinessFeatures } from '../../../../../../context/modules/business/application/get-business'
import { BUSINESS_TYPE } from '../../../../../../context/modules/business/const/business.const'

export const createOnlineBusiness = async (req: Request, res: Response) => {
  const { data } = req.body

  try {
    const { value, error } = onlineBusinessValidator.validate(data)

    if (error) {
      throw error
    }

    const schema = new BusinessBuilder()
      .setName(value.name)
      .setEmail(value.email)
      .setWebsite(value.website)
      .setType(BUSINESS_TYPE.ONLINE)
      .builder()
      .schema()
    const business = await insertBusiness(schema)

    res.status(201).json({ data: { business } })

  } catch (e) {
    res.status(400).json(e)
  }
}

export const createPhysicalBusiness = async (req: Request, res: Response) => {
  const { data } = req.body

  try {
    const { value, error } = physicalBusinessValidator.validate(data)

    if (error) {
      throw error
    }

    const schema = new BusinessBuilder()
      .setName(value.name)
      .setEmail(value.email)
      .setAddress(value.address)
      .setPhone(value.phone)
      .setType(BUSINESS_TYPE.PHYSICAL)
      .builder()
      .schema()
    const business = await insertBusiness(schema)
    res.status(201).json({ data: { business } })
  } catch (e) {
    res.status(400).json(e)
  }
}

export const getBusinessByID = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    if (!id) {
      throw ('Error Id not was founded')
    }

    const business = await getBusiness(id)

    if (!business) {
      throw ('Business schema not was founded')
    }

    res.status(200).json(business)
  } catch (e) {
    res.status(400).json({ e })
  }
}

export const getBusinessFeaturesById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    if (!id) {
      throw ('Error Id not was founded')
    }
    const business = await getBusinessFeatures(id)

    if (!business) {
      throw ('Business schema not was founded')
    }

    res.json(business)
  } catch (e) {
    res.status(400).json(e)
  }
}
