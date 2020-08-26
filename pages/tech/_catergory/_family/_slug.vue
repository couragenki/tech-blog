<template>
  <DefaultTemplate :isPostsPage="true">
    <BackButton
    :link="'/tech/' + catergory + '/' + family"
    :text="catergory + '/' + family + 'の記事一覧へ戻る'" />
    <p>ファミリースラッグ</p>
    <h2>{{ article.title }}</h2>
    <nuxt-content :document="article" />
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
    const { catergory, family, slug } = params;
    let article;

    try {
      article = await $content('tech', catergory, family, slug).fetch();
    } catch (e) {
      error({ message: "tech-family-data not found" });
    }

    return {
      article,
      catergory,
      family
    };
  },
};
</script>
