import { Router } from 'express'
import { createReview } from '../controllers/review.ctrl'

const router = Router()

router.post('/', createReview)

export default router
