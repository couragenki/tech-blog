<template>
  <n-link class="backbutton" :to="link">
    <p class="backbutton__text">{{ text }}</p>
  </n-link>
</template>

<script>
export default {
  name: "BackButton",
  props: {
    link: {
      type: String,
      default: () => {
        return "/";
      },
    },
    text: {
      type: String,
      default: () => {
        return "ボタン文言";
      },
    },
  },
};
</script>
<style scoped lang="scss">
.backbutton {
  // width: 16rem;
  font-size: 1.2em;
  color: white;
  background: #05b1ff;
  text-decoration: none;
  display: inline-block;
  padding: 0 0.5em;
  margin-top: 0.3em;
  margin-bottom: 0.3em;
  border-radius: 0.3em;
  &__text {
    margin: 0.3em 0.5em !important;
    padding-left: 0.5em;
  }
  &__text::before {
    content: "⬅︎";
    position: relative;
    left: -0.5em;
  }
}
</style>
