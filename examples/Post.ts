import { Model } from '../src/index'
import { IPost } from './PostInterface'

export default class Post extends Model<IPost> {

  id: number
  name: string
  created_at: string
  updated_at: string

  constructor(post)
  {
    super()
    super.factory(post)
  }
}
