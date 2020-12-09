<template>
  <div class="detail-wrapper">
    <header class="detail-header">
      <h2>{{figure.name}}</h2>
      <div>
        <button v-on:click="handleClose" class='x-button'>X Close</button>
      </div>
    </header>
    <section class='content'>
      <div class='info'>
        <div class='info-textbox'>
          <span class="bold">Occupation: </span>
          <span>{{figure.occupation}}</span>
          <br>
          <span class="bold">Born: </span>
          <span>{{figure.born.date|formatDate}} in {{figure.born.place}}</span>
          <br>
          <span class="bold">Died: </span>
          <span>{{figure.died.date|formatDate}} in {{figure.died.place}}</span>
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
    <figure-quiz :figure="figure" />
    </section>
    <hr>
  </div>
</template>

<script>
import figureQuiz from './figureQuiz'
import { eventBus } from '../main.js'

export default {
  name: "figure-detail",
  props: ["figure"],
  filters: {
    formatDate(value) {
        return new Date(value).toLocaleString().substring(0, 10)
    }
  },
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

.detail-wrapper {
  background-color: white;
}

.detail-header {
  background-color: rgb(58, 56, 57);
  color: white;
  padding: 0px 8%;
  display: flex;
  justify-content: space-between;
}

.content {
  margin: 10px 10%;
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
  width: 85%;
  margin: auto;
}

.bold {
  font-family: "ReithBold";
}

.x-button {
  font-family: "ReithBold";
  font-size: large;
  color: white;
  background-color: rgb(229,100,15);
  background: linear-gradient(172deg, rgba(229,100,15,1) 40%, rgba(242,178,7,1) 100%);
  border: none;
  box-shadow: 0 4px rgb(114, 55, 15);
  border-radius: 5px;
  position: relative;
  top: -15px;
}

.x-button:hover {
  opacity: 90%;
  cursor: pointer;
  transform: translateY(3px);
  background: linear-gradient(172deg, rgb(249, 147, 80) 10%, rgb(255, 211, 89) 70%);
  box-shadow: 0 1px rgb(162, 78, 22);
}


</style>