<template>
  <div class="detail-wrapper">
    <header class="detail-header">
      <h2>{{figure.name}}</h2>
      <div>
        <button v-on:click="handleClose" class='x-button'>X</button>
      </div>
    </header>
    <section class='content'>
      <div class='info'>
        <div class='info-textbox'>
          <span class="bold">Occupation: </span>
          <span>{{figure.occupation}}</span>
          <br>
          <span class="bold">Born: </span>
          <span>{{figure.born.date}}, {{figure.born.place}}</span>
          <br>
          <span class="bold">Died: </span>
          <span>{{figure.died.date}}, {{figure.died.place}}</span>
          <br>
          <span class="bold">Best known for: </span>
          <span>{{figure.bestKnownFor}}</span>
        </div>
        <aside class="image-container">
          <img :src="require(`@/assets/${figure.avatarPath}`)" alt="figure avatar" class="avatar">
        </aside>
      </div>
      <div class="biography">
        <section>
          <h3 class="bold">Biography</h3>
          <p>{{figure.biography}}</p>
        </section>
        <section class="fun-facts">
          <h3 class="bold">Fun Facts</h3>
          <ul>
           <li v-for="(fact,index) in figure.funFacts" :key="index">{{ fact }}</li>
          </ul>
        </section>
      </div>
    </section>
    <figure-quiz :figure="figure" />
    <hr>
  </div>
</template>

<script>
import figureQuiz from './figureQuiz'
import { eventBus } from '../main.js'

export default {
  name: "figure-detail",
  props: ["figure"],
  components: {
   'figure-quiz': figureQuiz
  },
  methods: {
    handleClose() {
      eventBus.$emit("close-detail")
    }
  },
  computed:{
    getImage(figure){
      return require(`@/assets/${figure.avatarPath}`)
    }
  }
}
</script>

<style lang="css" scoped>

hr {
  width: 90%;
  margin: 50px auto;
}

.detail-header {
  background-color: rgb(58, 56, 57);
  color: white;
  padding: 0px 3%;
  display: flex;
  justify-content: space-between;
}

.content {
  margin: 10px 8%;
}

.avatar {
  width: 300px;
}

.x-button {
    margin-top: 25px;
  }

.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bold {
  font-family: "ReithBold";
}




</style>