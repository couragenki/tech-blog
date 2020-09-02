<template>
  <PostTemplate
    v-if="tech.title"
    :isPostsPage="true"
    :post="tech"
    :catergory="catergory"
    :family="family"
  />
  <DefaultTemplate v-else :isPostsPage="true">
    <BackButton :link="'/tech/' + catergory" :text="catergory + 'の記事一覧へ戻る'" />
    <h2>{{ family }}に関する記事一覧</h2>
    <PostCards :data="tech" />
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
import PostTemplate from "@/components/Templates/posttemplate.vue";
import PostCards from "@/components/Organisms/postcards.vue";
import BackButton from "@/components/Atoms/backbutton.vue";
export default {
  components: {
    DefaultTemplate,
    PostTemplate,
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
  async asyncData({ $content, params }) {
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
