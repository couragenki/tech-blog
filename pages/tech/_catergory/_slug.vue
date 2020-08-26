<template>
  <DefaultTemplate :isPostsPage="true">
    カテゴリースラッグ
    {{this.$route.path}}
    <BackButton link="/tech/frontend" text="フロントエンドの記事一覧へ戻る" />
    <h2>{{ article.title }}</h2>
    <p>{{ article.description }}</p>
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
import BackButton from "@/components/Atoms/backbutton.vue";
export default {
  components: {
    DefaultTemplate,
    BackButton
  },
  async asyncData({ $content, params, route, error }) {
    let article;

    try {
      article = await $content("tech", params.slug).fetch();
    } catch (e) {
      error({ message: "tech-data not found" });
    }

    return {
      article,
    };
  },
};
</script>
