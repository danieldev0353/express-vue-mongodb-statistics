<template lang="html">
  <div class="quiz-nav">
    <input
      type="button"
      v-show="isPrevousShow"
      :disabled="isPrevousDisabled"
      @click="$emit('prevous')"
      :class="[buttonClass, nextClass]"
      :value="prevousValue">
    <input
      type="button"
      v-show="isNextShow"
      :disabled="isNextDisabled"
      @click="$emit('next')"
      :class="[buttonClass, nextClass]"
      :value="nextValue">
    <input
      type="button"
      v-show="isSubmitShow"
      :disabled="isSubmitDisabled"
      @click="$emit('submit')"
      :class="[buttonClass, submitClass]"
      :value="submitValue">
  </div>
</template>

<script>
export default {
  name: "QuizNav",
  // Buttons
  props: [
    "pages_count",
    "page",
    "completed",
    "completed_question",
    "buttonClass",
    "submitClass",
    "submitValue",
    "submitShow",
    "submitDisabled",
    "nextClass",
    "nextValue",
    "nextShow",
    "prevousClass",
    "prevousValue",
    "prevousShow"
  ],
  computed: {
    isSubmitShow: function() {
      return this.submitShow || this.completed == this.pages_count;
    },
    isSubmitDisabled: function() {
      return this.submitDisabled && this.completed != this.pages_count;
    },
    isNextShow: function() {
      return this.nextShow || this.completed_question;
    },
    isNextDisabled: function() {
      return this.page >= this.pages_count - 1 || !this.completed_question;
    },
    isPrevousShow: function() {
      return this.prevousShow;
    },
    isPrevousDisabled: function() {
      return this.page <= 0;
    }
  }
};
</script>

<style lang="css">
</style>
