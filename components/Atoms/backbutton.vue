<template>
  <nuxt-link tag="div" class="backbutton" :to="link">
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
    text:{
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
  width: 16rem;
  color: white;
  background: #68d0ff;
  display: inline-block;
  padding: 0.3em 0.5em;
  &__text::before {
    content: "⬅︎";
  }
}
</style>
