<template>
  <div class="thumbnail" v-on:click="handleClick">
      <header>
          <img src="https://image.flaticon.com/icons/png/128/149/149071.png" alt="">
      </header>
      <footer>{{figure.name}}</footer>
  </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
    name: "figure-thumbnail",
    props: ["figure"],
    methods: {
        handleClick(){
            eventBus.$emit('show-figure', this.figure)

        }
    }

}
</script>

<style scoped>

</style>