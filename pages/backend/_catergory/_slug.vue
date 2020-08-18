<template>
  <DefaultTemplate :isPostsPage="true">
    カテゴリースラッグ
    {{this.$route.path}}
    <nuxt-link to="/backend">⇦バックエンドの記事一覧へ戻る</nuxt-link>
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
  created(){
    console.log(this.$route.path)
  },
  async asyncData({ $content, params, route, error }) {
    let article;
    let path = route.path

    try {
      article = await $content('backend', params.slug).fetch();
    } catch (e) {
      error({ message: "backend-data not found" });
    }

    return {
      article,
    };
  },
};
</script>
