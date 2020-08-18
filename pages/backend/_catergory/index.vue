<template>
  <DefaultTemplate :isPostsPage="true">
    <nuxt-link to="/backend">⇦バックエンドの一覧ページへ戻る</nuxt-link>
    <h2>カテゴリーINDEX</h2>
    <div v-if="catergory == 'php'">
      phpに関するページ
    </div>
    <div v-if="catergory == 'python'">
      pythonに関するページ
    </div>

    <input id="search" v-model="q" placeholder="タイトル検索..." />
    <ul>
      <li v-for="article in backend" :key="article.slug">
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

    let query = $content('backend', catergory, { deep: true }).sortBy("date", "desc");

    if (q) {
      query = query.search('title', q)
    }

    const backend = await query.fetch();

    return {
      q,
      backend,
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
