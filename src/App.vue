<script lang="ts">
import { defineComponent } from 'vue'
import TestModel from '@/model/TestModel'

export default defineComponent({
  setup() {
    return {
      post: new TestModel(),
    }
  },
  data() {
    return {}
  },
  methods: {
    onCreate(){
      console.log('Created Model: ', this.post)
      const model = {
        id: 2,
        name: 'Carla',
      }
      this.post.create(model)
    },
    onView(){
      console.log('Model: ', this.post)
    },
    onUpdate(){
      this.post.id = 3
      this.post.name = 'Ingo'
      console.log('Updated Model: ', this.post)
    }
  }
})
</script>

<template>
  <header />
  <div>
    <h1>Reactive Attributes</h1>
    <input v-model='post.attributes.id' type='text'>
    <br>
    <input v-model='post.attributes.name' type='text'>
    <br>
    <p>id: {{ post.attributes.id }} | name: {{ post.attributes.name }}</p>
    <br>
  </div>

  <div>
    <h1>Class Properties</h1>
    <input v-model='post.id' type='text'>
    <br>
    <input v-model='post.name' type='text'>
    <br>
    <p>id: {{ post.id }} | name: {{ post.name }}</p>
    <br>
  </div>

  <button @click='onCreate'>
    Create
  </button>
  <button @click='onView'>
    View
  </button>
  <button @click='onUpdate'>
    Update
  </button>
  <main />
</template>
