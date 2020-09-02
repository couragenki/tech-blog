<template>
  <PostTemplate
    v-if="marketing.title"
    :isPostsPage="true"
    :post="marketing"
    :catergory="catergory"
    :family="family"
  />
  <DefaultTemplate v-else :isPostsPage="true">
    <BackButton :link="'/marketing/' + catergory" :text="catergory + 'の記事一覧へ戻る'" />
    <h2>{{ family }}に関する記事一覧</h2>
    <PostCards :data="marketing" />
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
    const marketing = await $content("marketing", catergory, family).fetch();
    return {
      marketing,
      catergory,
      family,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
