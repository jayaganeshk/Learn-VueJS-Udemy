<template>
  <div id="app">
  
  <h3>Get Jokes</h3>
  <button class="btn btn-primary" @click="initJokes">
    Get Jokes
  </button>
  <button class="btn btn-primary" @click="addJoke">
    Get a Joke
  </button>
  <br>
  <span 
  v-for="(type,index) in types"
  :key="index"
  :types="types"
  >
    
  <input 
  v-model="checkedTypes"
  type="checkbox" 
  :value="type"
  checked />
  <label>{{type}} </label> &nbsp;
  </span>
  <br>
  <div class="col-md-12">
    <Joke 
     v-for= "(joke,index) in $store.state.jokes"
     v-show="checkedTypes.includes(joke.type)"
     :key="index"
     :joke="joke"
     :index="index"
    />
  </div>
  
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import Joke from './joke.vue'
  export default {
    data() {
      return {
        types: ["general", "knock-knock", "programming"],
        checkedTypes: ["general", "knock-knock", "programming"],
      }
    },
    components: {
      Joke
    },
    methods: mapActions(
        [
        'initJokes',
        'addJoke'
        ]
    )
  }
</script>

<style>
</style>
