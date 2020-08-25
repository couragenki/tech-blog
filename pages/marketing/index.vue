<template>
  <DefaultTemplate :isPostsPage="true">
    <nuxt-link to="/">⇦ホームへ戻る</nuxt-link>
    <h2>マーケティング INDEX</h2>
    <p>
      マーケティングに関する記事をまとめています
    </p>
    <input id="search" v-model="q" placeholder="URL検索..." />

    <PostCards :data="marketing" />
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
  created(){
    console.log(this.$route.path)
  },
  watchQuery: true,
  async asyncData({ $content, route }) {
    const q = route.query.q;

    let query = $content("marketing", { deep: true }).sortBy("date", "desc");

    if (q) {
      query = query.search(q);
      // タイトル検索 query = query.search('title', q)
    }

    const marketing = await query.fetch();

    return {
      q,
      marketing,
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
