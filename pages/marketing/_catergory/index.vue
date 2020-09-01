<template>
  <DefaultTemplate :isPostsPage="true">
    <nuxt-link to="/marketing">⇦マーケティングの一覧ページへ戻る</nuxt-link>
    <h2>{{catergory}}に関する記事</h2>
    <PostCards :data="marketing" />
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
    titleTemplate: "マーケティング | couragenki",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "マーケティングに関するページです。SNSやブログに関する記事を見つけることができます。",
      },
    ],
  },
  async asyncData({ $content, params }) {
    const { catergory, family, slug } = params;
    let query = $content("marketing", catergory, { deep: true }).sortBy(
      "date",
      "desc"
    );
    const marketing = await query.fetch();

    return {
      marketing,
      catergory,
    };
  },
};
</script>
