<template>
  <DefaultTemplate :isPostsPage="true">
    カテゴリースラッグ
    {{this.$route.path}}
    <nuxt-link to="/marketing">⇦マーケティングの記事一覧へ戻る</nuxt-link>
    <h2>{{ article.title }}</h2>
    <p>{{ article.description }}</p>
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
export default {
  components: {
    DefaultTemplate,
  },
  async asyncData({ $content, params, route, error }) {
    let article;

    try {
      article = await $content("marketing", params.slug).fetch();
    } catch (e) {
      error({ message: "marketing-data not found" });
    }

    return {
      article,
    };
  },
};
</script>
