<template>
  <DefaultTemplate :isPostsPage="true">
    <nuxt-link to="/">⇦ホームへ戻る</nuxt-link>
    <h2>
      テクノロジー INDEX</h2>
    <p>
      テクノロジーに関する記事をまとめています</p>
    <input id="search" v-model="q" placeholder="URL検索..." />

    <div class="posts">
      <BlogCrad
        v-for="article in technology" :key="article.slug"
        :link="article.path"
        :blogTitle="article.title"
        :blogCategory="article.dir"
        :blogText="article.description"
        :blogTags="article.tags"
      />
    </div>
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

    let query = $content("technology", { deep: true }).sortBy("date");

    if (q) {
      // query = query.search(q);
      // タイトル検索
      console.log(query)
      query = query.search('title', q)
      console.log(query)
    }

    const technology = await query.fetch();
    console.error(technology);

    return {
      q,
      technology,
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
@import "~~/node_modules/bootstrap/scss/bootstrap.scss";
.posts {
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  .card {
    width: 16rem;
    margin-right: 1.6rem;
    margin-bottom: 2rem;
  }
}

@media (max-width: 596px) {
  .posts {
    .card {
      width: 100%;
      margin: 1rem 0;
    }
  }
}
</style>