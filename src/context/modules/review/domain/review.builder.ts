import { Review } from './review'

export class ReviewBuilder {
  private _text: string | undefined
  private _rating: number | undefined
  private _username: string | undefined
  private _businessId: string | undefined

  setText(value: string) {
    this._text = value
    return this
  }

  setRating(value: number) {
    this._rating = value
    return this
  }

  setUsername(value: string) {
    this._username = value
    return this
  }

  setBusinessId(value: string) {
    this._businessId = value
    return this
  }

  builder(): Review {
    return new Review(this._text!, this._rating!, this._username!, this._businessId!)
  }
}
