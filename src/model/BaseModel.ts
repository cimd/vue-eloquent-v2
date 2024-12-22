import { reactive } from 'vue'

export default abstract class BaseModel {
  attributes = reactive({
    id: 0,
    name: ''
  })

  protected constructor() {
    Object.defineProperty(this, 'attributes', {
      // value: reactive({}),
      writable: false,
      configurable: false,
      enumerable: false
    })
  }

  protected factory(model: any) {
    for (const key in model) {
      if (Object.prototype.hasOwnProperty.call(model, key)) {

        this.attributes[ key ] = model[ key ]
        this[ key ] = this.attributes[ key ]
      }
    }
  }

  get(target, name, receiver) {
    console.log('getter')
    console.log(target, name, receiver)
    return 'abc'
  }

  set [ 'attribute' ](val: any) {
    console.log('setter')
    console.log('set', ['attribute'], val)
    return this.attributes[ ['attribute'] ] = val
  }
}
