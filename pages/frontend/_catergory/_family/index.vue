<template>
  <div>
    <nuxt-link to="/frontend">frontend</nuxt-link>
    <h2>{{ catergory }}/{{ family }}</h2>

    <ul>
      <li v-for="article in frontend" :key="article.slug">
        <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  watchQuery: true,
  async asyncData({ $content, route, params }) {
    const { catergory, family } = params;

    const frontend = await $content("frontend", catergory, family)
      .sortBy("date", "desc")
      .fetch();

    return {
      frontend,
      catergory,
      family,
    };
  },
};
</script>
