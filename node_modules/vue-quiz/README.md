# vue-quiz

Vue.js base Quiz plugin, with multiple answers and other features.
By default uses Bootstrap CSS classes.

## Project setup
```
npm install freel/vue-quiz
```

## Use with Vue
```
<template>
  <vue-quiz
    @complete="' complete action '"
    :questions = "' json Object '"
    // CSS props
  />
</template>

<script>
import VueQuiz from 'vue-quiz'

export default {
  components: {
    VueQuiz
  }
}
</script>
```

## Params
@complete - action starts when user click submit button. Returns Object
```
Object {
  answer: Array[ Array [ index: selected item index ] ],
  right_answers: Array [ index: if selected items right then true, else false ]
}
e.g.:
{
  answers: [[0:1, 1:2],[0:0]],
  right_answers: [0: true, 1: false]
}
```

questions - Array of questions with answers

## Questions
Is array of JSON object with next structure:
```
:questions = "'[
  {text:"Vue.JS is",
    answers:[
      {text:"JS framework", right:true},
      {text:"PHP framework"},
      {text:"Something from space"}
  ]},
...
]'"
```

## Props
|Name            | Type | Default | Description
| --- | --- | --- | --- |
|action                   | String | "#"                                      | Submit form action
|submitValue              | String | "jumbotron"                              | Submit button value
|container-class          | String | "h5"                                     | CSS class names for top layout
|question-class           | String | "col-auto my-1"                          | CSS class names for question layout
|answers-container-class  | String | "col-auto my-1"                          | CSS class names for answers layout
|answer-class             | String | "alert alert-dark"                       | CSS class names for answer block
|answer-control-class     | String | "custom-control custom-checkbox mr-sm-2" | CSS class names for answer custom form control
|answer-checkbox-class    | String | "custom-control-input"                   | CSS class names for answer checkbox
|answer-label-class       | String | "custom-control-label"                   | CSS class names for answer label
|button-class             | String | "btn btn-primary"                        | CSS class names for all buttons
|submit-class             | String |                                          | CSS class names for submit button
|submit-value             | String | "Submit"                                 | Button caption
|submit-show              | Bool   | true                                     | If "true" button always shown, else enabled when all questions are answered
|submit-disabled          | Bool   | true                                     | If "true" button always disabled, else always active (if submit-show == true)
|next-class               | String |                                          | CSS class names for next button
|next-value               | String | "Next"                                   | Button caption
|next-show                | Bool   | true                                     | Always show button, if "false" then show when answer checked
|prevous-class            | String |                                          | CSS class names for back button
|prevous-value            | String | "Back"                                   | Button caption
|prevous-show             | Bool   | true                                     | Show button if question number > 0, if "false" then never show this button
