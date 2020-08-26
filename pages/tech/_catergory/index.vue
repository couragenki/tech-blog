<template>
  <DefaultTemplate :isPostsPage="true">
    <BackButton link="/tech" text="技術記事一覧ページへ戻る" />
    <h2>カテゴリーINDEX</h2>
    <div v-if="catergory == 'vue'">Vue.jsに関するページ</div>
    <div v-if="catergory == 'nuxt'">Nuxt.jsに関するページ</div>
    <div v-if="catergory == 'gatsby'">gatsby.jsに関するページ</div>

    <input id="search" v-model="q" placeholder="タイトル検索..." />

    <PostCards :data="tech" />
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
import PostCards from "@/components/Organisms/postcards.vue";
import BackButton from "@/components/Atoms/backbutton.vue";
export default {
  components: {
    DefaultTemplate,
    PostCards,
    BackButton
  },
  watchQuery: true,
  async asyncData({ $content, route, params }) {
    const q = route.query.q;
    const { catergory, family, slug } = params;

    let query = $content("tech", catergory, { deep: true }).sortBy(
      "date",
      "desc"
    );

    if (q) {
      query = query.search("title", q);
    }

    const tech = await query.fetch();

    return {
      q,
      tech,
      catergory,
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
