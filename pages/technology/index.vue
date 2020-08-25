<template>
  <DefaultTemplate :isPostsPage="true">
    <nuxt-link to="/">⇦ホームへ戻る</nuxt-link>
    <h2>
      テクノロジー INDEX</h2>
    <p>
      テクノロジーに関する記事をまとめています</p>
    <input id="search" v-model="q" placeholder="URL検索..." />

    <PostCards :data="technology"/>
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
import PostCards from "@/components/Organisms/postcards.vue";
export default {
  components: {
    DefaultTemplate,
    PostCards,
  },
  watchQuery: true,
  async asyncData({ $content, route }) {
    const q = route.query.q;

    let query = $content("technology", { deep: true }).sortBy("date");

    if (q) {
      // query = query.search(q);
      // タイトル検索
      console.log(query)
      query = query.search('title', q)
      console.log(query)
    }

    const technology = await query.fetch();
    console.error(technology);

    return {
      q,
      technology,
    };
  },
  watch: {
    q() {
      this.$router
        .replace({ query: this.q ? { q: this.q } : undefined })
        .catch(() => {});
    },
  },
};
</script>
<style scoped lang="scss">
</style>