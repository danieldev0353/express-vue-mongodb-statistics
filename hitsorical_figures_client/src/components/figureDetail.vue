<template>
  <div class="detail-wrapper">
    <header>
      <button v-on:click="handleClose">X</button>
      <h2>{{figure.name}}</h2>
    </header>
    <section class='content'>
      <div class='info'>
        <div class='info-textbox'>
          <span>Occupation:</span>
          <span>{{figure.Occupation}}</span>
          <br>
          <span>Born:</span>
          <span>something</span>
          <br>
          
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import { eventBus } from '../main.js'
export default {
  name: "figure-detail",
  props: ["figure"],
  methods: {
    handleClose() {
      eventBus.$emit("close-detail")
    }
  }
}
</script>

<style lang="css" scoped>

</style>