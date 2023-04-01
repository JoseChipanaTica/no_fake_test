import { Router } from 'express'
import reviewRoutes from './modules/review/routes/review.routes'
import businessRoutes from './modules/business/routes/business.routes'

const router = Router()

router.use('/review', reviewRoutes)
router.use('/business', businessRoutes)

export default router
