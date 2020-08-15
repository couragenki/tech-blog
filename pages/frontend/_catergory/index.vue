<template>
  <DefaultTemplate :isPostsPage="true">
    <nuxt-link to="/">Home</nuxt-link>
    カテゴリーページ
    <h2>Nuxt.js Blog</h2>

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
  async asyncData({ $content, route }) {
    const q = route.query.q;

    let query = $content('frontend', { deep: true }).sortBy("date", "desc");

    if (q) {
      query = query.search(q);
      // タイトル検索 query = query.search('title', q)
    }

    const frontend = await query.fetch();

    return {
      q,
      frontend,
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
