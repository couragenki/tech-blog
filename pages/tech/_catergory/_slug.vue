<template>
  <PostTemplate :isPostsPage="true" :post="article" />
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
    let article;

    try {
      article = await $content("tech", params.slug).fetch();
    } catch (e) {
      error({ message: "tech-data not found" });
    }

    return {
      article,
    };
  },
};
</script>
