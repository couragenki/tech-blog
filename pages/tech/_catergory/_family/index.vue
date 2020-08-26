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
  async asyncData({ $content, route, params }) {
    const { catergory, family, slug } = params;
    const article = await $content("tech", catergory, family).fetch();
    return {
      article,
      catergory,
      family,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
