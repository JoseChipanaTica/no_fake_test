import { BusinessData } from './business.schema'

export class Business {
  private readonly name: string
  private readonly website: string
  private readonly email: string
  private readonly address: string
  private readonly phone: string
  private readonly type: string

  constructor(name: string,
              website: string,
              email: string,
              address: string,
              phone: string,
              type: string) {
    this.name = name
    this.website = website
    this.email = email
    this.address = address
    this.phone = phone
    this.type = type
  }

  schema(): BusinessData {
    return {
      address: this.address,
      email: this.email,
      name: this.name,
      phone: this.phone,
      type: this.type,
      website: this.website
    }
  }
}
