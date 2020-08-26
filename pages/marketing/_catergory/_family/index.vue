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
    const marketing = await $content("marketing", catergory, family).fetch();
    return {
      marketing,
      catergory,
      family,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
