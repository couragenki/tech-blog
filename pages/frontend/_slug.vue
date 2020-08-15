<template>
  <DefaultTemplate :isPostsPage="true">
    <nuxt-link to="/articles">Articles</nuxt-link>
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
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
export default {
  components: {
    DefaultTemplate,
  },
  async asyncData({ $content, params, error }) {
    let article;

    try {
      article = await $content("frontend", params.slug).fetch();
    } catch (e) {
      error({ message: "frontend-data not found" });
    }

    const [prev, next] = await $content("frontend")
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
