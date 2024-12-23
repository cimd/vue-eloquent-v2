import { reactive } from 'vue'
import show from '@/Api/show'
import update from '@/Api/update'
import { apiPrefix } from '@/http/http'

export default abstract class BaseModel {
  attributes: any

  protected constructor() {
    Object.defineProperty(this, 'attributes', {
      value: reactive({}),
      writable: true,
      configurable: false,
      enumerable: false
    })
  }

  create(model?: any) {
    const iterable = model ?? this
    for (const key in iterable) {
      this.attributes[ key ] = iterable[ key ]

      Object.defineProperty(this, key, {
        get() {
          return this.attributes[ key ]
        },
        set(newVal: any) {
          this.attributes[ key ] = newVal
        }
      })
    }
  }

  abstract resource(): string

  async find<T>(id: number) {
    try {
      const result = await show<T>(id, {
        apiPrefix: apiPrefix,
        resource: this.resource()
      })
      console.log('find: ', result.data)
      this.create(result.data)

      return result.data
    } catch (err) {
      console.error(err)
    }
  }

  async update<T>() {
    try {
      const result = await update<T>(this.attributes, {
        apiPrefix: apiPrefix,
        resource: this.resource()
      })
      console.log('find: ', result.data)
      this.create(result.data)

      return result.data
    } catch (err) {
      console.error(err)
    }
  }
}
