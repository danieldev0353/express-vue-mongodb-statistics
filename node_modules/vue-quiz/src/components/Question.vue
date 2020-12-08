<template>
  <keep-alive>
    <div>
      <span
        :class="questionClass">{{ question }}</span>
      <slot
        name="Answer"></slot>
    </div>
  </keep-alive>
</template>

<script>
export default {
  name: "QuizQuestion",
  props: [
    "question",
    "startPage",
    "action",
    "timer",
    "containerClass",
    "questionClass"
  ]
};
</script>
