<template>
  <div>
    <nuxt-link to="/tech">tech</nuxt-link>
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
      article = await $content("tech", catergory, family, slug).fetch();
    } catch (e) {
      error({ message: "family-data not found" });
    }

    return {
      article,
    };
  },
};
</script>
