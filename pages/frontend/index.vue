<template>
  <DefaultTemplate :isPostsPage="true">
    <nuxt-link to="/">⇦ホームへ戻る</nuxt-link>
    <h2>フロントエンド INDEX</h2>
    <p>フロントエンドに関する記事をまとめています</p>
    <input id="search" v-model="q" placeholder="URL検索..." />

    <ul class="posts">
      <li class="post" v-for="article in frontend" :key="article.slug">
        <BlogCrad
          :link="article.path"
          :blogTitle="article.title"
          blogCategory="フロントエンド"
          :blogTags="article.tags"
        />
      </li>
    </ul>
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
import BlogCrad from "@/components/Molecules/blogcard.vue";
export default {
  components: {
    DefaultTemplate,
    BlogCrad,
  },
  watchQuery: true,
  async asyncData({ $content, route }) {
    const q = route.query.q;

    let query = $content("frontend", { deep: true }).sortBy("date", "desc");

    if (q) {
      query = query.search(q);
      // タイトル検索 query = query.search('title', q)
    }

    const frontend = await query.fetch();
    console.error(frontend);

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
<style scoped lang="scss">
.posts {
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  .post {
    width: fit-content;
    margin-left: 20px;
    margin-bottom: 20px;
  }
}
</style>