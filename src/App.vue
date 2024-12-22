<script lang="ts">
import { defineComponent } from 'vue'
import TestModel from '@/model/TestModel'

export default defineComponent({
  data() {
    return {}
  },
  created() {
    const model = {
      id: 1,
      name: 'Carla',
    }
    const post = new TestModel(model)

    console.log(post.id)
    post.id = 2
    const test = post.id
    console.log('Attribute: ', test)
    console.log('Model: ', post)
    console.log('Attributes: ', post.attributes)
  }
})
</script>

<template>
  <header />

  <main />
</template>
