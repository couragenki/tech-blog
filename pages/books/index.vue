<template>
  <DefaultTemplate :isPostsPage="true">
    <nuxt-link to="/">⇦ホームへ戻る</nuxt-link>
    <h2>読書 INDEX</h2>
    <p>
      読書に関する記事をまとめています
    </p>
    <input id="search" v-model="q" placeholder="URL検索..." />

    <ul>
      <li v-for="article in books" :key="article.slug">
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

    let query = $content("books", { deep: true }).sortBy("date", "desc");

    if (q) {
      query = query.search(q);
      // タイトル検索 query = query.search('title', q)
    }

    const books = await query.fetch();

    return {
      q,
      books,
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
