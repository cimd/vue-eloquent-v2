import BaseModel from '../src/model/BaseModel'

export default class UserModel extends BaseModel {
  id = 1
  name = 'Heitor'
  created_at = new Date()
  updated_at = new Date()

  constructor(model?: { id: number; name: string }) {
    super()
    super.create(model)
  }

  resource() {
    return 'users'
  }
}
