<template>
  <DefaultTemplate :isPostsPage="true">
    <h2>マーケティング INDEX</h2>
    <p>マーケティングに関する記事をまとめています</p>
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
  async asyncData({ $content }) {
    let query = $content("marketing", { deep: true }).sortBy("date", "desc");
    const marketing = await query.fetch();

    return { marketing };
  },
};
</script>
