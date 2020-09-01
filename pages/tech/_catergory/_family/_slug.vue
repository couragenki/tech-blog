<template>
  <PostTemplate :isPostsPage="true" :post="article" :catergory="catergory" :family="family" />
</template>

<script>
import PostTemplate from "@/components/Templates/posttemplate.vue";
export default {
  components: {
    PostTemplate,
  },
  head: {
    titleTemplate: "テック | couragenki",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "WEB技術に関するページです。フロントエンド、バックエンドなど様々な記事を見つけることが可能です。",
      },
    ],
  },
  async asyncData({ $content, params, error }) {
    const { catergory, family, slug } = params;
    let article;

    try {
      article = await $content("tech", catergory, family, slug).fetch();
    } catch (e) {
      error({ message: "tech-family-data not found" });
    }

    return {
      article,
      catergory,
      family,
    };
  },
};
</script>
