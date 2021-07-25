<template>
  <PostTemplate :isPostsPage="true" :post="article" :catergory="catergory" :family="family" />
</template>

<script>
import PostTemplate from "@/components/Templates/posttemplate.vue";
export default {
  components: {
    PostTemplate,
  },
  async asyncData({ $content, params, route, error }) {
    const { catergory, family, slug } = params;
    let article;

    try {
      article = await $content("business", catergory, family, slug).fetch();
    } catch (e) {
      error({ message: "business-family-data not found" });
    }

    return {
      article,
      catergory,
      family,
    };
  },
};
</script>
