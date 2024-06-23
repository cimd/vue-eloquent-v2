import { describe, expect, it } from 'vitest'
import Post from '../../../examples/Post'
import Model from '../../../src/model/Model.js'

const model = {
  id: 1,
  name: 'John',
  created_at: '2021-08-25',
  updated_at: '2021-08-25'
}
describe('model', () => {
  it('creates', async () => {
    const post = new Post(model)

    expect(post).toHaveProperty('id', 1)
    expect(post).toBeInstanceOf(Post)
    expect(post).toBeInstanceOf(Model)
  })

  it('casts', async () => {
    const post = new Post(model)

    expect(post.created_at).toBeInstanceOf(Date)
    expect(post.updated_at).toBeInstanceOf(Date)
  })
})
