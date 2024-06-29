import { describe, expect, it } from 'vitest'
import Post from '../../../examples/Post'
import Model from '../../../src/model/Model.js'

const model = {
  id: '1',
  title: 'My First Post',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  author_id: 1,
  author: 'John',
  created_at: '2021-08-25',
  updated_at: '2021-08-25'
}
describe('model', () => {
  it('creates', async () => {
    const post = new Post(model)
    console.log(post)

    expect(post).toHaveProperty('id', 1)
    expect(post).toBeInstanceOf(Post)
    expect(post).toBeInstanceOf(Model)
  })

  it('casts', async () => {
    const post = new Post(model)
    console.log('post:', post)

    expect(post.created_at).toBeInstanceOf(Date)
    expect(post.updated_at).toBeInstanceOf(Date)
    expect(post.author).toEqual('John Doe')
  })
})
