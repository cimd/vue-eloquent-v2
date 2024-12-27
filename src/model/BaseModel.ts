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
          // this.attributes[ key ] = newVal

          if (this.hasCast(key)) {
            console.log('hasCast: ', key, this.hasCast(key))
            this.attributes[ key ] = this.castTo(this.getCast(key), key, newVal)
          } else {
            this.attributes[ key ] = newVal
          }
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
      // console.log('find: ', result.data)
      console.log('this: ', this)
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


  protected casts() {
    return {
      created_at: 'date',
      updated_at: 'date',
      deleted_at: 'date'
    }
  }

  private hasCast(key: string) {
    console.log('hasCast: ', key, Object.prototype.hasOwnProperty.call(this.casts(), key))
    return Object.prototype.hasOwnProperty.call(this.casts(), key)
  }

  private getCast(key: string): any {
    if (!this.hasCast(key)) return

    return this.casts()[ key ]
  }

  protected castTo(cast: string, key: string, value: any) {
    switch (cast) {
    case 'date':
      return new Date(value)
    case 'number':
      return Number(value)
    default:
      return cast(this, key, value, this.casts())
    }
  }
}
