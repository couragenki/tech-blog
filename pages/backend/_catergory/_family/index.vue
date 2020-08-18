<template>
  <DefaultTemplate :isPostsPage="true">
    <nuxt-link :to="'/backend/' + catergory">⇦{{catergory}}の記事一覧へ戻る</nuxt-link>
    <p>ファミリーページINDEX</p>
    <h2>{{ family }}に関する記事一覧</h2>
    <nuxt-content :document="backend" />
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
export default {
  components: {
    DefaultTemplate,
  },
  async asyncData({ $content, route, params }) {
    const { catergory, family, slug } = params;
    let path = route.path
    const backend = await $content('backend', catergory, family).fetch();
    return {
      backend,
      catergory,
      family,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
