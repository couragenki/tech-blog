<template>
  <DefaultTemplate :isPostsPage="true">
    <BackButton link="/marketing" text="マーケティングの一覧ページへ戻る" />
    <h2>{{catergory}}に関する記事</h2>
    <PostCards :data="marketing" />
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
import PostCards from "@/components/Organisms/postcards.vue";
import BackButton from "@/components/Atoms/backbutton.vue";
export default {
  components: {
    DefaultTemplate,
    PostCards,
    BackButton,
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
      {
        hid: "og:title",
        property: "og:title",
        content: "マーケティング | couragenki",
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "マーケティングに関するページです。SNSやブログに関する記事を見つけることができます。",
      },
    ],
  },
  async asyncData({ $content, params }) {
    const { catergory, family, slug } = params;
    let query = $content("marketing" + "/" + catergory, { deep: true }).sortBy(
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
