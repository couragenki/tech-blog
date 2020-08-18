<template>
  <DefaultTemplate :isPostsPage="true">
    <nuxt-link to="/others">⇦その他の一覧ページへ戻る</nuxt-link>
    <h2>カテゴリーINDEX</h2>
    <input id="search" v-model="q" placeholder="タイトル検索..." />
    <ul>
      <li v-for="article in others" :key="article.slug">
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

    let query = $content('others', catergory, { deep: true }).sortBy("date", "desc");

    if (q) {
      query = query.search('title', q)
    }

    const others = await query.fetch();

    return {
      q,
      others,
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
