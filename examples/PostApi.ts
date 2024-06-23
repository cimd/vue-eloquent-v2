import { Api } from '../src/index'

export default class PostApi extends Api {

  resource(){
    return 'posts'
  }
}
