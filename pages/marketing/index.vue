<template>
  <DefaultTemplate :isPostsPage="true">
    <nuxt-link to="/">⇦ホームへ戻る</nuxt-link>
    <h2>マーケティング INDEX</h2>
    <p>マーケティングに関する記事をまとめています</p>
    <PostCards :data="marketing" />
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
import PostCards from "@/components/Organisms/postcards.vue";
export default {
  components: {
    DefaultTemplate,
    PostCards
  },
  async asyncData({ $content }) {
    let query = $content("marketing", { deep: true }).sortBy("date", "desc");
    const marketing = await query.fetch();

    return { marketing }
  },
};
</script>
