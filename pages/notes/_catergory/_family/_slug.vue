<template>
  <PostTemplate :isPostsPage="true" :post="article" :catergory="catergory" :family="family" />
</template>

<script>
import PostTemplate from "@/components/Templates/posttemplate.vue";
export default {
  components: {
    PostTemplate,
  },
  async asyncData({ $content, params, error }) {
    const { catergory, family, slug } = params;
    let article;

    try {
      article = await $content(
        "notes" + "/" + catergory + "/" + family + "/" + slug
      ).fetch();
    } catch (e) {
      error({ message: "notes-family-data not found" });
    }

    return {
      article,
      catergory,
      family,
    };
  },
};
</script>
