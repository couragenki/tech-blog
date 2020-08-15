<template>
  <DefaultTemplate :isPostsPage="true">
    カテゴリースラッグ
    {{this.$route.path}}
    <nuxt-link to="/frontend">frontend</nuxt-link>
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
  created(){
    console.log(this.$route.path)
  },
  async asyncData({ $content, params, route, error }) {
    let article;
    let path = route.path

    try {
      article = await $content('frontend', params.slug).fetch();
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
