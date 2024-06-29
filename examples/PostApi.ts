import { Api } from '../src/index'
import Post from './Post'

export default class PostApi extends Api {
  constructor() {
    super('test')
  }

  resource(){
    return 'posts'
  }

  protected model() {
    return Post
  }
}
