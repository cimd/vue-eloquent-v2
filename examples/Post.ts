import { Model } from '../src/index'
import { IPost } from './PostInterface'

export default class Post extends Model<IPost> {

  id: number
  name: string
  created_at: string
  updated_at: string

  static test = 'My Test'

  static {
    console.log('Class static initialization block called')
  }

  constructor(post)
  {
    super()
    console.log(this.test)
    super.factory(post)
  }
}
