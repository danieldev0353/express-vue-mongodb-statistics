<template>
  <div :class="containerClass">
    <quiz-question
    :action="action"
    :question="question.text"
    :containerClass="containerClass"
    :questionClass="questionClass"
    >
      <quiz-answer
        slot="Answer"
        v-model="answered[item]"
        @right="right"
        :answerContainerClass="answerContainerClass"
        :answerClass="answerClass"
        :answerControlClass="answerControlClass"
        :answerCheckboxClass="answerCheckboxClass"
        :answerLabelClass="answerLabelClass"
        :answers="question.answers"
        :question="item"
      >
    </quiz-answer>
    </quiz-question>
    <quiz-nav
      @prevous="prevousItem"
      @next="nextItem"
      @submit="formSubmit"
      :pages_count="pages_count"
      :page="item"
      :completed="completed"
      :completed_question="completed_question"
      :buttonClass="buttonClass"
      :submitClass="submitClass"
      :submitValue="submitValue"
      :submitShow="submitShow"
      :submitDisabled="submitDisabled"
      :nextClass="nextClass"
      :nextValue="nextValue"
      :nextShow="nextShow"
      :prevousClass="prevousClass"
      :prevousValue="prevousValue"
      :prevousShow="prevousShow"
    >
    </quiz-nav>
  </div>
</template>

<script>
import QuizQuestion from "./components/Question.vue";
import QuizAnswer from "./components/Answer.vue";
import QuizNav from "./components/Nav.vue";

export default {
  name: "vue-quiz",
  components: {
    QuizQuestion,
    QuizAnswer,
    QuizNav
  },
  props: {
    questions: {
      type: Array,
      default: () => {
        return [
          {
            text: "Vue.JS is",
            answers: [
              { text: "JS framework", right: true },
              { text: "PHP framework" },
              { text: "Something from space", right: true }
            ]
          },
          {
            text: "This is second question?",
            answers: [
              { text: "No" },
              { text: "Both" },
              { text: "Yes", right: true }
            ]
          },
          {
            text: "This is third question?",
            answers: [
              { text: "No!" },
              { text: "Yes!", right: true },
              { text: "Both?" }
            ]
          }
        ];
      }
    },
    containerClass: {
      type: String,
      default: "jumbotron"
    },
    questionClass: {
      type: String,
      default: "h5"
    },
    answerContainerClass: {
      type: String,
      default: "col-auto my-1"
    },
    answerClass: {
      type: String,
      default: "alert alert-dark"
    },
    answerControlClass: {
      type: String,
      default: "custom-control custom-checkbox mr-sm-2"
    },
    answerCheckboxClass: {
      type: String,
      default: "custom-control-input"
    },
    answerLabelClass: {
      type: String,
      default: "custom-control-label"
    },
    // Buttons
    buttonClass: {
      type: String,
      default: "btn btn-primary"
    },
    // Submit
    submitClass: {
      type: String,
      default: ""
    },
    submitValue: {
      type: String,
      default: "Submit"
    },
    submitShow: {
      type: Boolean,
      default: false
    },
    submitDisabled: {
      type: Boolean,
      default: true
    },
    // Next
    nextClass: {
      type: String,
      default: ""
    },
    nextValue: {
      type: String,
      default: "Next"
    },
    nextShow: {
      type: Boolean,
      default: true
    },
    // Prevous
    prevousClass: {
      type: String,
      default: ""
    },
    prevousValue: {
      type: String,
      default: "Back"
    },
    prevousShow: {
      type: Boolean,
      default: true
    },
    // Submit form action
    action: {
      type: String,
      default: "#"
    }
  },
  data() {
    return {
      item: 0,
      answered: [], // all answers
      right_answers: [] // right or false answers
    };
  },
  computed: {
    pages_count: function() {
      return this.questions.length;
    },
    question: function() {
      return this.questions[this.item];
    },
    completed: function() {
      return this.answered != null ? this.answered.filter(String).length : 0;
    },
    completed_question: function() {
      return this.answered[this.item] != null
        ? this.answered[this.item].filter(String).length
        : false;
    }
  },
  methods: {
    nextItem: function() {
      return this.item < this.pages_count ? this.item++ : void 0;
    },
    prevousItem: function() {
      return this.item > 0 ? this.item-- : void 0;
    },
    right: function(val) {
      this.right_answers[this.item] = val;
    },
    formSubmit: function() {
      // TODO: return JSON values
      this.$emit("complete", {
        answers: this.answered,
        right_answers: this.right_answers
      });
    }
  }
};
</script>
