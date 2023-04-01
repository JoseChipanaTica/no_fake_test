import { Request, Response } from 'express'
import { reviewValidator } from '../validators/review.validators'
import { ReviewBuilder } from '../../../../../../context/modules/review/domain/review.builder'
import { insertReview } from '../../../../../../context/modules/review/application/insert-review'

export const createReview = async (req: Request, res: Response) => {
  const { data } = req.body

  try {
    const { value, error } = reviewValidator.validate(data)

    if (error) {
      throw error
    }

    const review = new ReviewBuilder()
      .setText(value.text)
      .setRating(value.rating)
      .setUsername(value.username)
      .setBusinessId(value.businessId)
      .builder()
      .schema()

    const reviewSaved = await insertReview(review)
    res.status(201).json({ success: reviewSaved })
  } catch (e) {
    res.status(400).json(e)
  }
}
