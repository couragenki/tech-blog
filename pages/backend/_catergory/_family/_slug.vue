<template>
  <div>
    <nuxt-link to="/backend">backend</nuxt-link>
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
      article = await $content("backend", catergory, family, slug).fetch();
    } catch (e) {
      error({ message: "backend-family-data not found" });
    }

    return {
      article,
    };
  },
};
</script>
