import { Router } from 'express'
import {
  createOnlineBusiness,
  createPhysicalBusiness,
  getBusinessByID,
  getBusinessFeaturesById
} from '../controllers/business.ctrl'

const router = Router()

router.post('/online-business', createOnlineBusiness)
router.post('/physical-business', createPhysicalBusiness)

router.get('/:id', getBusinessByID)
router.get('/businessFeatures/:id', getBusinessFeaturesById)
export default router
