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
header {
    border: 1px solid black;
    padding: 5px;
    margin: auto;
}

header > img {
    display: block;
    margin: auto;
}

footer {
    text-align: center;
    border:1px solid black;
    padding: 5px;
    margin-top: -1px;
}

.thumbnail {
    height: 100%;
}

.thumbnail:hover {
    background-color: rgb(225, 254, 245);
}

</style>