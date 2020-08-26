<template>
  <div>
    <nuxt-link :to="'/' + post.type + '/' + catergory + '/' + family">⇦{{catergory}}/{{family}}の記事一覧へ戻る</nuxt-link>
    <h1>{{ post.title }}</h1>
    <nuxt-content :document="post" />
  </div>
</template>

<script>
export default {
  name: "PostContent",
  components: {
  },
  props:{
    catergory: {
      type: String,
      default: () => { return null }
    },
    family: {
      type: String,
      default: () => { return null }
    },
    post: {
      type: Object,
      default: () => { return {} }
    },
  },
};
</script>
<style lang="scss" scoped>
@media (max-width: 768px) {
}
@media (max-width: 320px) {
}
</style>