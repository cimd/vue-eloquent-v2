import { describe, expect, it } from 'vitest'
import TestModel from '@/model/TestModel'

const model = {
  id: 1,
  title: 'My First Post',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  author_id: 1,
  author: 'John',
  created_at: '2021-08-25',
  updated_at: '2021-08-25'
}
describe('model', () => {
  it('creates', async () => {
    const post = new TestModel(model)
    console.log(post)

    expect(post).toHaveProperty('id', 1)
  })
})
