<template>
  <DefaultTemplate :isPostsPage="true">
    <nuxt-link to="/books">books</nuxt-link>
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
  async asyncData({ $content, params, error }) {
    const { catergory, family, slug } = params;

    let article;

    try {
      article = await $content("books", catergory, family, slug).fetch();
    } catch (e) {
      error({ message: "family-data not found" });
    }

    return {
      article,
    };
  },
};
</script>
