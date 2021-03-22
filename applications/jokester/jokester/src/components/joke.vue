<template>
  <div class="col-md-6">
    <div class="jokes-card">
      <div class="card-block">
        <button class="close" @click="removeJoke(index)">&times;</button>
        <p><u>{{index+1}} {{joke.setup}}</u></p>
        <p><em>{{joke.punchline}}</em></p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript" src="">
  import { mapActions } from 'vuex'
  export default {
    props: ['joke', 'index'],
    methods: mapActions(
        [
          'removeJoke'
        ]
    )
  }
</script>
