import { Business } from './business'

export class BusinessBuilder {
  private _name: string | undefined
  private _website = ''
  private _email: string | undefined
  private _address = ''
  private _phone = ''
  private _type: string | undefined

  setName(value: string) {
    this._name = value
    return this
  }

  setWebsite(value: string) {
    this._website = value
    return this
  }

  setEmail(value: string) {
    this._email = value
    return this
  }

  setAddress(value: string) {
    this._address = value
    return this
  }

  setPhone(value: string) {
    this._phone = value
    return this
  }

  setType(value: string) {
    this._type = value
    return this
  }

  builder(): Business {
    return new Business(
      this._name!,
      this._website!,
      this._email!,
      this._address!,
      this._phone!,
      this._type!
    )
  }
}
