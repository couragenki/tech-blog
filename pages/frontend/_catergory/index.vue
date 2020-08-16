<template>
  <DefaultTemplate :isPostsPage="true">
    <nuxt-link to="/frontend">frontendへ戻る</nuxt-link>
    <h2>カテゴリーINDEX</h2>
    <nuxt-content :document="article" />

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



    let article;

    try {
      article = await $content('frontend', catergory).fetch();
    } catch (e) {
      error({ message: "frontend-family-data not found" });
    }
    console.log(article)

    return {
      q,
      frontend,
      article
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
