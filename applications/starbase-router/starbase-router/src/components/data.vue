<template>
    <div class="col-md-12">
        <item 
        v-for="(item,index) in items"
        :key= index
        :passedItem="item"
        :type="type"
        />
    </div>
</template>

<script>
import item from './item.vue'
    export default {
        components:{
            item
        },
        data(){
          return {
              type: this.$route.params.type  ,
              items: [],
              character:{}
          }
        },
        watch: {
            '$route': 'fetchItems'
        },
        methods: {
          fetchItems()  {
              this.type = this.$route.params.type  
              this.items= []
              let initalIDs = [1,13,14]
              for (let i in initalIDs){
                  let id = initalIDs[i]
                  fetch(`https://swapi.dev/api/${this.type}/${id}/`,
                      {
                          method: 'GET'
                      }
                      ).then(response => response.json())
                      .then(json => this.items.push(json))
              }
                 
          },
        },
        created(){
          this.fetchItems()  
        },
    }
</script>