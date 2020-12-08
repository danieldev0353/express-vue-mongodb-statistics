<template>
  <div class="thumbnail" v-on:click="handleClick">
      <header>
          <img :src="require(`@/assets/${figure.avatarPath}`)" alt="" class="avatar">
      </header>
      <footer class='thumbnail-footer'>{{figure.name}}</footer>
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
    border: 1px solid white;
    padding: 5px;
    margin: auto;
}

header > img {
    display: block;
    margin: auto;
}

footer {
    text-align: center;
    border: 1px solid white;
    padding: 5px;
    margin-top: -1px;
}

.thumbnail {
    height: 100%;
    background: rgb(249, 213, 190);
    background: linear-gradient(180deg, rgb(254, 193, 152) 48%, rgba(236,217,165,1) 80%, rgb(250, 248, 168) 95%);
    border-radius: 10%;

}

.avatar {
    width: 100%;
}

.thumbnail:hover {
    background-color: rgb(225, 254, 245);
    opacity: 50%;
}

.thumbnail-footer {
    background-color: rgb(58, 56, 57);
    color: white;
}

</style>