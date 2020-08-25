<template>
  <DefaultTemplate :isSidebar="false">
    <h2>TOP PAGE</h2>
    <ul class="posts">
      <li class="post" v-for="article in technology" :key="article.slug">
        <BlogCrad
          :link="article.path"
          :blogTitle="article.title"
          :blogCategory="article.dir"
          :blogTags="article.tags"
        />
      </li>
    </ul>
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
import BlogCrad from "@/components/Molecules/blogcard.vue";
import NewPosts from "@/components/Organisms/newposts.vue";

export default {
  components: {
    DefaultTemplate,
    BlogCrad,
    NewPosts,
  },
  watchQuery: true,
  async asyncData({ $content, route }) {
    const q = route.query.q;

    // 前投稿から投稿日が新しい順12件に取得する
    let query = $content("", { deep: true }).sortBy("date").limit(12);

    if (q) {
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
};
</script>

<style scoped lang="scss">
.posts {
  list-style: none;
}
</style>
