<template>
  <DefaultTemplate :isPostsPage="true">
    <BackButton link="/" text="ホームへ戻る" />
    <h1>Techページ</h1>
    <p>技術やプログラミングに関する記事をまとめています。</p>
    <PostCards :data="data" />
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
  async asyncData({ $content }) {
    let query = $content("tech", { deep: true }).sortBy("date", "desc");
    const tech = await query.fetch();
    const data = tech.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });

    return {
      data,
    };
  },
};
</script>
