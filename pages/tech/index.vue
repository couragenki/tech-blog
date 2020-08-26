<template>
  <DefaultTemplate :isPostsPage="true">
    <BackButton link="/" text="ホームへ戻る"/>
    <h2>
      テック INDEX</h2>
    <p>
      テックに関する記事をまとめています</p>
    <input id="search" v-model="q" placeholder="URL検索..." />

    <PostCards :data="tech"/>
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
  async asyncData({ $content, route }) {
    const q = route.query.q;

    let query = $content("tech", { deep: true }).sortBy("date");

    if (q) {
      // query = query.search(q);
      // タイトル検索
      console.log(query)
      query = query.search('title', q)
      console.log(query)
    }

    const tech = await query.fetch();
    console.error(tech);

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
<style scoped lang="scss">
</style>