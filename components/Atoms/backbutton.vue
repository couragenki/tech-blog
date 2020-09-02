<template>
  <nuxt-link class="backbutton" :to="link">
    <p class="backbutton__text">{{text}}</p>
  </nuxt-link>
</template>

<script>
export default {
  name: "BackButton",
  props: {
    link: {
      type: String,
      default: () => {
        return "/tech";
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
  padding: 0.5em;
  &__text {
    margin: 0;
    padding-left: 0.5em;
  }
  &__text::before {
    content: "⬅︎";
    position: relative;
    left: -0.5em;
  }
}
</style>
