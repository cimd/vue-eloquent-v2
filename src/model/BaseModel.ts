import { reactive } from 'vue'

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

  abstract resource(): void
}
