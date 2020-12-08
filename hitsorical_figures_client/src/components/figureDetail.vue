<template>
  <div class="detail-wrapper">
    <header class="detail-header">
      <h2>{{figure.name}}</h2>
      <div>
        <button v-on:click="handleClose">X</button>
      </div>
    </header>
    <section class='content'>
      <div class='info'>
        <div class='info-textbox'>
          <span>Occupation: </span>
          <span>{{figure.occupation}}</span>
          <br>
          <span>Born: </span>
          <span>{{figure.born.date}}, {{figure.born.place}}</span>
          <br>
          <span>Died: </span>
          <span>{{figure.died.date}}, {{figure.died.place}}</span>
          <br>
          <span>Best known for: </span>
          <span>{{figure.bestKnownFor}}</span>
        </div>
        <aside class="image-container">
          <img src="https://image.flaticon.com/icons/png/128/149/149071.png" alt="">
        </aside>
      </div>
      <div class="biography">
        <section>
          <h3>Biography</h3>
          <p>{{figure.biography}}</p>
        </section>
        <section class="fun-facts">
          <h3>Fun Facts</h3>
          <ul>
           <li v-for="(fact,index) in figure.funFacts" :key="index">{{ fact }}</li>
          </ul>
        </section>
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

.detail-header {
  background-color: rgb(235, 220, 233);
  padding: 0px 3%;
  display: flex;
  justify-content: space-between;
}

.content {
  margin: 10px 8%;
}

</style>