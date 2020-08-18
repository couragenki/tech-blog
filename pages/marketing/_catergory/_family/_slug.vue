<template>
  <DefaultTemplate :isPostsPage="true">
    <nuxt-link :to="'/marketing/' + catergory + '/' + family">⇦{{catergory}}/{{family}}の記事一覧へ戻る</nuxt-link>
    <p>ファミリースラッグ</p>
    <h2>{{ article.title }}</h2>
    <nuxt-content :document="article" />
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
export default {
  components: {
    DefaultTemplate,
  },
  async asyncData({ $content, params, route, error }) {
    const { catergory, family, slug } = params;
    let article;

    try {
      article = await $content('marketing', catergory, family, slug).fetch();
    } catch (e) {
      error({ message: "marketing-family-data not found" });
    }

    return {
      article,
      catergory,
      family
    };
  },
};
</script>
