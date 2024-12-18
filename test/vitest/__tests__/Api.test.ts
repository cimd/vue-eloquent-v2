import { describe, expect, it } from 'vitest'
import PostApi from '../../../examples/PostApi'
import Post from '../../../examples/Post.js'

describe('model api', () => {
  it('get', async () => {
    const post = await PostApi.get()

    expect(post.data[0]).toBeInstanceOf(Post)
  })

  it('show', async () => {
    const post = await PostApi.show(1)

    expect(post.data).toBeInstanceOf(Post)
  })
})
