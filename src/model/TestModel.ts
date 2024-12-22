import BaseModel from '@/model/BaseModel'

export default class TestModel extends BaseModel {
  id = 1
  name = 'Heitor'

  constructor(model?: { id: number; name: string }) {
    super()
    if (model) this.factory(model)
  }
}
