<template>
  <PostTemplate
    :isPostsPage="true"
    :post="article"
    :catergory="catergory"
    :family="family" />
</template>

<script>
import PostTemplate from "@/components/Templates/posttemplate.vue";
export default {
  components: {
    PostTemplate
  },
  async asyncData({ $content, params, error }) {
    let article;

    try {
      article = await $content("notes", params.slug).fetch();
    } catch (e) {
      error({ message: "notes-data not found" });
    }

    return {
      article,
    };
  },
};
</script>
