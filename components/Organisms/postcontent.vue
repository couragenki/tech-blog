<template>
  <div>
    <nuxt-link
      :to="'/' + post.type + '/' + catergory + '/' + family"
    >⇦{{catergory}}/{{family}}の記事一覧へ戻る</nuxt-link>
    <p>執筆日:{{setDate(post.created_at)}}</p>
    <h1>{{ post.title }}</h1>
    <nuxt-content :document="post" />
  </div>
</template>

<script>
export default {
  name: "PostContent",
  components: {},
  props: {
    catergory: {
      type: String,
      default: () => {
        return null;
      },
    },
    family: {
      type: String,
      default: () => {
        return null;
      },
    },
    post: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  methods: {
    setDate(date) {
      if (!date) return "不明";

      const y = date.substring(0, 4);
      const m = date.substring(5, 7);
      const d = date.substring(8, 10);

      return y + "年" + m + "月" + d + "日";
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