<template>
  <DefaultTemplate :isPostsPage="true">
    <nuxt-link to="/frontend">frontend</nuxt-link>
    <p>ファミリーページINDEX</p>
    <h2>{{ family }}に関する記事一覧</h2>
    <ul>
      <li v-for="article in frontend" :key="article.slug">
        <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
      </li>
    </ul>
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
<style lang="scss" scoped></style>
