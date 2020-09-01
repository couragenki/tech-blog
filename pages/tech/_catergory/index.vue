<template>
  <DefaultTemplate :isPostsPage="true">
    <nuxt-link to="/tech">⇦技術の一覧ページへ戻る</nuxt-link>
    <h2>{{catergory}}に関する記事</h2>
    <PostCards :data="tech" />
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
import PostCards from "@/components/Organisms/postcards.vue";
export default {
  components: {
    DefaultTemplate,
    PostCards,
  },
  head: {
    titleTemplate: "テック | couragenki",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "WEB技術に関するページです。フロントエンド、バックエンドなど様々な記事を見つけることが可能です。",
      },
    ],
  },
  async asyncData({ $content, params }) {
    const { catergory, family, slug } = params;
    let query = $content("tech", catergory, { deep: true }).sortBy(
      "date",
      "desc"
    );
    const tech = await query.fetch();

    return {
      tech,
      catergory,
    };
  },
};
</script>
