<script lang="ts">
import { defineComponent } from 'vue'
import UserModel from '@/model/UserModel'
// import show from '@/Api/show'
import createExampleHttp from '@/http/exampleHttp'

export default defineComponent({
  setup() {
    return {
      user: new UserModel(),
    }
  },
  data() {
    return {}
  },
  created() {
    createExampleHttp()
    // const config = {
    //   apiPrefix: 'api/v1',
    //   resource: 'users',
    // }
    // show(5, config).then((response) => {
    //   console.log('Data: ', response.data)
    // })
    this.user.find(5)
  },
  methods: {
    onCreate(){
      console.log('Created Model: ', this.user)
      const model = {
        id: 2,
        name: 'Carla',
      }
      this.user.create(model)
    },
    onView(){
      console.log('Model: ', this.user)
    },
    onUpdate(){
      this.user.id = 3
      this.user.name = 'Ingo'
      console.log('Updated Model: ', this.user)
    }
  }
})
</script>

<template>
  <header />
  <div>
    <h1>Reactive Attributes</h1>
    <input v-model='user.attributes.id' type='text'>
    <br>
    <input v-model='user.attributes.name' type='text'>
    <br>
    <p>id: {{ user.attributes.id }} | name: {{ user.attributes.name }}</p>
    <br>
  </div>

  <div>
    <h1>Class Properties</h1>
    <input v-model='user.id' type='text'>
    <br>
    <input v-model='user.name' type='text'>
    <br>
    <p>id: {{ user.id }} | name: {{ user.name }}</p>
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
