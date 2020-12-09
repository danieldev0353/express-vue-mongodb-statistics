<template>
  <div>
      <h1>{{figure.name}} Quiz</h1>
      
      <form  v-on:submit.prevent="handleSubmit">
        <h2 > Q1 Is my birthday {{figure.born.date}}</h2>
        <input type="radio" class="question" name="question1" v-model="q1Answer" value="yes">
        <label for="true" >YES</label><br>
        <input type="radio"  name="question1" v-model="q1Answer" value="no">
        <label for="false">NO</label><br>
        <p :class="displayFeedback1">{{correctFeedback1}}</p>
      </form>

      <form v-on:submit.prevent="handleSubmit">
        <h2> Q2 Was my job {{figure.occupation}}</h2>
        <input type="radio" class="question" name="question2" value="yes" v-model="q2Answer">
        <label for="true" >YES</label><br>
        <input type="radio"  name="question2" value="no" v-model="q2Answer">
        <label for="false">NO</label><br>
        <p :class="displayFeedback2">{{correctFeedback2}}</p>
      </form>

      <form v-on:submit.prevent="handleSubmit">
        <h2> Q3 Am I best known for {{figure.bestKnownFor}}</h2>
        <input type="radio"  name="question3" value="yes" v-model="q3Answer">
        <label for="true" >YES</label><br>
        <input type="radio"  name="question3" value="no" v-model="q3Answer">
        <label for="false">NO</label><br>
        <p :class="displayFeedback3">{{correctFeedback3}}</p>
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
  computed:{
    correctFeedback1(){
      let feedbackMessage = ""
      if (this.q1Answer === 'yes'){
        feedbackMessage = 'Correct'
        } else {
        feedbackMessage = 'Incorrect'
      }
      return feedbackMessage
    },
    correctFeedback2(){
      let feedbackMessage = ""
      if (this.q2Answer === 'yes'){
        feedbackMessage = 'Correct'
        } else {
        feedbackMessage = 'Incorrect'
      }
      return feedbackMessage
    },

    correctFeedback3(){
      let feedbackMessage = ""
      if (this.q3Answer === 'yes'){
        feedbackMessage = 'Correct'
        } else {
        feedbackMessage = 'Incorrect'
      }
      return feedbackMessage
    },

    displayFeedback1(){
      return this.q1Answer ? "visible" : "invisible"
    },

     displayFeedback2(){
      return this.q2Answer ? "visible" : "invisible"
    },

     displayFeedback3(){
      return this.q3Answer ? "visible" : "invisible"
    }
  },
  methods: {
}
}
</script>

<style scoped>
 .invisible {
  display: none;
}
.visible {
  display: initial;
}




</style>