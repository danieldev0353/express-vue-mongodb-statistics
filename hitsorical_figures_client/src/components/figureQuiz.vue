<template>
  <div id= 'quiz-wrapper'>
      <h2>{{figure.name}} Quiz</h2>
      <form  v-on:submit.prevent="handleSubmit">
        <h3> Q1 Is my birthday {{figure.born.date}}?</h3>
        <div class="question-wrapper">
          <div>
            <input type="radio" class="question" name="question1"        v-model="q1Answer" value="yes">
            <label for="true" >YES</label><br>
            <input type="radio"  name="question1" v-model="q1Answer" value="no">
            <label for="false">NO</label><br>
          </div>
          <p :class="displayFeedback1">{{correctFeedback1}}</p>
        </div>  
      </form>

      <form v-on:submit.prevent="handleSubmit">
        <h3> Q2 Was my job {{figure.occupation}}?</h3>
        <div class="question-wrapper">
          <div>
            <input type="radio" class="question" name="question2" value="yes" v-model="q2Answer">
            <label for="true" >YES</label><br>
            <input type="radio"  name="question2" value="no" v-model="q2Answer">
            <label for="false">NO</label><br>
          </div>
          <p :class="displayFeedback2">{{correctFeedback2}}</p>
        </div>
      </form>

      <form v-on:submit.prevent="handleSubmit" >
        <h3> Q3 Am I best known for {{figure.bestKnownFor}}?</h3>
        <div class="question-wrapper" id="last" >
          <div>
            <input type="radio"  name="question3" value="yes" v-model="q3Answer">
            <label for="true" >YES</label><br>
            <input type="radio"  name="question3" value="no" v-model="q3Answer">
            <label for="false">NO</label><br>
          </div>  
          <p :class="displayFeedback3">{{correctFeedback3}}</p>
        </div>
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
  }

}
</script>

<style scoped>
h2 {
  color:white;
  font-family: "ReithBold";
  padding: 1em;
}
h3 {
  padding: 1em;
  padding-bottom: 0%;
}

form {
  color:white;
  background-color: rgb(58, 56, 57);
  margin: 10px;
}

.invisible {
  display: none;
}
.visible {
  display: initial;
}

#quiz-wrapper{
  padding: 10px 10px 20px 10px;
  width: 80%;
  margin: auto;
  background: rgb(229,100,15);
  background: linear-gradient(172deg, rgba(229,100,15,1) 28%, rgba(242,178,7,1) 78%, rgba(255,222,0,1) 100%);
  border-radius: 5%; 
}

.question-wrapper{
  display: flex;
  justify-content: space-between;
  padding: 2em;
  background-color: white;
  color: black;
  border: 5px solid  rgb(58, 56, 57);
  
}

p{
  font-size: 20px;
  margin-right: 1em;
}

</style>