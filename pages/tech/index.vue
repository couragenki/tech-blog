<template>
  <DefaultTemplate :isPostsPage="true">
    <nuxt-link to="/">⇦ホームへ戻る</nuxt-link>
    <h2>技術 INDEX</h2>
    <p>技術に関する記事をまとめています</p>
    <input id="search" v-model="q" placeholder="URL検索..." />

    <PostCards :data="tech" />
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
  watchQuery: true,
  async asyncData({ $content, route }) {
    const q = route.query.q;

    let query = $content("tech", { deep: true }).sortBy("date", "desc");

    if (q) {
      query = query.search(q);
      // タイトル検索 query = query.search('title', q)
    }

    const tech = await query.fetch();

    return {
      q,
      tech,
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
