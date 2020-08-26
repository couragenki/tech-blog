<template>
  <DefaultTemplate :isPostsPage="true">
    <nuxt-link to="/notes">⇦その他の一覧ページへ戻る</nuxt-link>
    <h2>カテゴリーINDEX</h2>
    <input id="search" v-model="q" placeholder="タイトル検索..." />
    <PostCards :data="notes" />

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
  async asyncData({ $content, route, params }) {
    const q = route.query.q;
    const { catergory, family, slug } = params;

    let query = $content('notes', catergory, { deep: true }).sortBy("date", "desc");

    if (q) {
      query = query.search('title', q)
    }

    const notes = await query.fetch();

    return {
      q,
      notes,
      catergory
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
