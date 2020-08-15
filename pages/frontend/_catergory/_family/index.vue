<template>
  <DefaultTemplate :isPostsPage="true">
    <nuxt-link to="/frontend">frontend</nuxt-link>
    ファミリーページ
    <h2>{{ catergory }}/{{ family }}</h2>
    <nuxt-content :document="frontend" />
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
export default {
  components: {
    DefaultTemplate,
  },
  watchQuery: true,
  async asyncData({ $content, route, params }) {
    const { catergory, family } = params;
    let path = route.path

    const frontend = await $content('frontend', catergory, family).fetch();
    return {
      frontend,
      catergory,
      family,
    };
  },
};
</script>
