<template>
  <div class="thumbnail">
      <header>
          <img src="" alt="">
      </header>
      <footer>{{ figure.name }}</footer>
  </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
    name: "figure-thumbnail",
    props: ["figure"]

}
</script>

<style>

</style>