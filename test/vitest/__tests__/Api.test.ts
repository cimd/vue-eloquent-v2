import { describe, expect, it } from 'vitest'
import PostApi from '../../../examples/PostApi'
import { Api } from '../../../src/index.js'

describe('model api', () => {
  it('get method', async () => {
    const api = await PostApi.get()
    console.log(api)

    expect(api).toBeInstanceOf(Api)
  })
})
