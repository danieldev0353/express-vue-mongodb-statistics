<template>
  <div>
      <h1>{{figure.name}} Quiz</h1>
      
      <form  v-on:submit.prevent="handleSubmit">
        <h2 > Q1 Is my birthday {{figure.born.date}}</h2>
        <input type="radio" class="question" name="question1" v-model="q1Answer" value="yes">
        <label for="true" >YES</label><br>
        <input type="radio" class="question" name="question1" v-model="q1Answer" value="no">
        <label for="false">NO</label><br>
        <p :class="addClass(q1Answer)">Correct</p>
      </form>

      <form v-on:submit.prevent="handleSubmit">
        <h2> Q2 Was my job {{figure.occupation}}</h2>
        <input type="radio" class="question" name="question2" value="yes" v-model="q2Answer">
        <label for="true" >YES</label><br>
        <input type="radio" class="question" name="question2" value="no" v-model="q2Answer">
        <label for="false">NO</label><br>
        <p :class="addClass(q2Answer)">Correct</p>
      </form>

      <form v-on:submit.prevent="handleSubmit">
        <h2> Q3 Am I best known for {{figure.bestKnownFor}}</h2>
        <input type="radio" class="question" name="question3" value="yes" v-model="q3Answer">
        <label for="true" >YES</label><br>
        <input type="radio" class="question" name="question3" value="no" v-model="q3Answer">
        <label for="false">NO</label><br>
        <p :class="addClass(q3Answer)">Correct</p>
        <p>Incorrect</p>
      </form>
  </div>    
</template>

<script>

import { eventBus } from '../main.js'

export default {
  name: "figure-quiz",
  data(){
    return {
      q1Answer: null,
      q2Answer: null,
      q3Answer: null
    }
  },
  props: ["figure", "historicalFigures"],
  methods: {
    
    addClass(answer){
      let className = ""
      if (answer == 'yes'){
        className = 'true'
      
      return className 
    }
    }
  }
}
</script>

<style scoped>
form p {
  display: none;
}
.true {
  display: initial;
}

</style>