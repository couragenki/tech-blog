<template>
  <div>
    <nuxt-link to="/backend">backend</nuxt-link>
    <h2>{{ article.title }}</h2>
    <p>{{ article.description }}</p>

    <!-- <nuxt-content :document="article" /> -->

    <nuxt-link
      v-if="prev"
      :to="{ name: 'articles-slug', params: { slug: prev.slug } }"
    >&lt; {{ prev.title }}</nuxt-link>&nbsp;|
    <br />
    <nuxt-link
      v-if="next"
      :to="{ name: 'articles-slug', params: { slug: next.slug } }"
    >{{ next.title }} &gt;</nuxt-link>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let article;

    try {
      article = await $content("backend", params.slug).fetch();
    } catch (e) {
      error({ message: "backend-data not found" });
    }

    const [prev, next] = await $content("backend")
      .only(["title", "slug"])
      .sortBy("date", "desc")
      .surround(params.slug)
      .fetch();

    return {
      article,
      prev,
      next,
    };
  },
};
</script>
