<template>
  <div>
      <h1>{{figure.name}} Quiz</h1>
      
      <form  v-on:submit.prevent="handleSubmit">
        <h2 > Q1 Is my birthday {{figure.born.date}}</h2>
        <input type="radio" class="question" name="question1" v-model="q1Answer" value="true">
        <label for="true" :class="addClass(q1Answer)">TRUE</label><br>
        <input type="radio" class="question" name="question1" v-model="q1Answer" value="false">
        <label for="false":class="addClass(q1Answer)">FALSE</label><br>
      </form>

      <form v-on:submit.prevent="handleSubmit">
        <h2> Q2 Was my job {{figure.occupation}}</h2>
        <input type="radio" class="question" name="question2" value="true" v-model="q2Answer">
        <label for="true" :class="addClass(q1Answer)">TRUE</label><br>
        <input type="radio" class="question" name="question2" value="false" v-model="q2Answer">
        <label for="false" :class="addClass(q1Answer)">FALSE</label><br>
      </form>

      <form v-on:submit.prevent="handleSubmit">
        <h2> Q3 Am I best known for {{figure.bestKnownFor}}</h2>
        <input type="radio" class="question" name="question3" value="true" v-model="q3Answer">
        <label for="true" :class="addClass(q1Answer)">TRUE</label><br>
        <input type="radio" class="question" name="question3" value="false" v-model="q3Answer">
        <label for="false":class="addClass(q1Answer)" >FALSE</label><br>
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
    handleSubmit(){
      
  // add computed class on submiting to add css green/red  
    },
    addClass(answer){
      let className = ""
      if (answer == 'true'){
        className = 'true'
      } else {
        className = 'false'
      }
      return className 
    }
   
  }
}
</script>

<style scoped>
.true {
  color: green;
}
.false {
  color: red;
}
</style>