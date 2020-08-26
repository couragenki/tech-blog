<template>
  <PostTemplate
    v-if="tech.title"
    :isPostsPage="true"
    :post="tech"
    :catergory="catergory"
    :family="family" />
  <DefaultTemplate v-else isPostsPage="true">
    <nuxt-link :to="'/tech/' + catergory">⇦{{catergory}}の記事一覧へ戻る</nuxt-link>
      <p>ファミリーページINDEX</p>
      <h2>{{ family }}に関する記事一覧</h2>
      <PostCards :data="tech" />
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
import PostTemplate from "@/components/Templates/posttemplate.vue";
import PostCards from "@/components/Organisms/postcards.vue";
export default {
  components: {
    DefaultTemplate,
    PostTemplate,
    PostCards
  },
  async asyncData({ $content, route, params }) {
    const { catergory, family, slug } = params;
    const tech = await $content("tech", catergory, family).fetch();
    return {
      tech,
      catergory,
      family,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
