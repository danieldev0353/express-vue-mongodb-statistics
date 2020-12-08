<template>
  <div>
      <h1>{{figure.name}} Quiz</h1>
      
      <form  v-on:submit.prevent="handleSubmit">
        <h2> Q1 Is my birthday {{figure.born.date}}</h2>
        <input type="radio" class="question" name="question1" v-model="q1Answer" value="true">
        <label for="true">TRUE</label><br>
        <input type="radio" class="question" name="question1" v-model="q1Answer" value="false">
        <label for="false">FALSE</label><br>
        <input type="submit" value="Submit">
      </form>

      <form v-on:submit.prevent="handleSubmit">
        <h2> Q2 Was my job {{figure.occupation}}</h2>
        <input type="radio" class="question" name="question2" value="true">
        <label for="true">TRUE</label><br>
        <input type="radio" class="question" name="question2" value="false">
        <label for="false">FALSE</label><br>
        <input type="submit" value="Submit">
      </form>

      <form v-on:submit.prevent="handleSubmit">
        <h2> Q3 Am I best known for {{figure.bestKnownFor}}</h2>
        <input type="radio" class="question" name="question3" value="true">
        <label for="true">TRUE</label><br>
        <input type="radio" class="question" name="question3" value="false">
        <label for="false">FALSE</label><br>
        <input type="submit" value="Submit">
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
      q3Answer: null,
      
    }
  },
  props: ["figure", "historicalFigures"],
  methods: {
    handleSubmit(){
      if (this.q1Answer == 'true') {
        console.log("correct")
      }
      
  // add computed class on submiting to add css green/red 
      
    }
  }
}
</script>

<style scoped>

</style>