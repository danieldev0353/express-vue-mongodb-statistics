<template>
  <div class="detail-wrapper">
    <header class="detail-header">
      <h2>{{figure.name}}</h2>
      <div>
        <button v-on:click="handleClose" class='x-button'>X</button>
      </div>
    </header>
    <section class='content' :class='contnentInvisible'>
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
    </section>
    <div id="quizButton">
      <button v-on:click="showQuiz()" :class='contnentInvisible'>{{figure.name}} Quiz</button>
    </div>
    <figure-quiz :figure="figure" :class="quizVisible"/>
    <div id="closeQuiz" :class="quizVisible">
      <button v-on:click="hideQuiz()" >Close</button>
    </div>
    <hr>
  </div>
</template>

<script>
import figureQuiz from './figureQuiz'
import { eventBus } from '../main.js'

export default {
  name: "figure-detail",
  data(){
    return {
      quizVisible: "",
      contnentInvisible: ""
    }
      
  },
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
    },

    showQuiz(){
      this.quizVisible = "show"
      this.contnentInvisible = "hide"
    },

    hideQuiz(){
      this.quizVisible = "hide"
      this.contnentInvisible = "show"
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
#closeQuiz {
  display:none;
}

#closeQuiz > button {
  background-color:rgb(58, 56, 57);
  font-size: 20px;
  padding: 1%;
  border: none;
  border-radius: 10px;
  color:white;
}

#closeQuiz.show {
  display: block;
  text-align: center;
  margin: 2%;
}

#quizButton{
  display: block;
  text-align: center;
}

#quizButton > button {
  background-color:rgb(58, 56, 57);
  font-size: 20px;
  padding: 1%;
  border: none;
  border-radius: 10px;
  color:white;
}
#quiz-wrapper{
  display: none ;
}

#quiz-wrapper.show {
  display: block;
  margin-top: 3%;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
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

.content.hide {
  display: none;
}
.hide{
  display: none;
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