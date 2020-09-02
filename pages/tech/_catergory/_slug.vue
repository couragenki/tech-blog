<template>
  <PostTemplate :isPostsPage="true" :post="article" />
</template>

<script>
import PostTemplate from "@/components/Templates/posttemplate.vue";
export default {
  components: {
    PostTemplate,
  },
  data() {
    return {
      pageTitle: "",
      pageDescription: "",
    };
  },
  async asyncData({ $content, params, error }) {
    let article;

    try {
      article = await $content("tech" + "/" + params.slug).fetch();
    } catch (e) {
      error({ message: "tech-data not found" });
    }

    return {
      article,
    };
  },
};
</script>
