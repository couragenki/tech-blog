<template>
  <div>
    <nuxt-link to="/frontend">frontend</nuxt-link>
    <h2>{{ article.title }}</h2>
    <nuxt-content :document="article" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const { catergory, family, slug } = params;

    let article;

    try {
      article = await $content("frontend", catergory, family, slug).fetch();
    } catch (e) {
      error({ message: "frontend-family-data not found" });
    }

    return {
      article,
    };
  },
};
</script>
