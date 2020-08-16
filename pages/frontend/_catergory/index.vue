<template>
  <DefaultTemplate :isPostsPage="true">
    <nuxt-link to="/frontend"><< フロントエンドの一覧ページへ戻る</nuxt-link>
    <h2>カテゴリーINDEX</h2>
    <div v-if="catergory == 'vue'">
      Vue.jsに関するページ
    </div>
    <div v-if="catergory == 'nuxt'">
      Nust.jsに関するページ
    </div>
    <div v-if="catergory == 'gatsby'">
      gatsby.jsに関するページ
    </div>

    <input id="search" v-model="q" placeholder="Search..." />
    <ul>
      <li v-for="article in frontend" :key="article.slug">
        <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
      </li>
    </ul>

  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
export default {
  components: {
    DefaultTemplate,
  },
  created(){
    console.log(this.$route.path)
  },
  watchQuery: true,
  async asyncData({ $content, route, params }) {
    const q = route.query.q;
    const { catergory, family, slug } = params;

    let query = $content('frontend', { deep: true }).sortBy("date", "desc");

    if (q) {
      query = query.search(q);
      // タイトル検索 query = query.search('title', q)
    }

    const frontend = await query.fetch();

    return {
      q,
      frontend,
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
