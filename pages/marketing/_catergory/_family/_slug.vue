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
    titleTemplate: "マーケティング | couragenki",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "マーケティングに関するページです。SNSやブログに関する記事を見つけることができます。",
      },
    ],
  },
  async asyncData({ $content, params, route, error }) {
    const { catergory, family, slug } = params;
    let article;

    try {
      article = await $content("marketing", catergory, family, slug).fetch();
    } catch (e) {
      error({ message: "marketing-family-data not found" });
    }

    return {
      article,
      catergory,
      family,
    };
  },
};
</script>
