<template>
  <DefaultTemplate :isPostsPage="true">
    <nuxt-link to="/others">others</nuxt-link>
    <h2>{{ catergory }}/{{ family }}</h2>

    <ul>
      <li v-for="article in others" :key="article.slug">
        <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
      </li>
    </ul>
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
export default {
  components: {
    DefaultTemplate,
  },
  watchQuery: true,
  async asyncData({ $content, route, params }) {
    const { catergory, family } = params;

    const others = await $content("others", catergory, family)
      .sortBy("date", "desc")
      .fetch();

    return {
      others,
      catergory,
      family,
    };
  },
};
</script>
