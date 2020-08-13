<template>
  <div>
    <nuxt-link to="/tech">tech</nuxt-link>
    <h2>{{ catergory }}/{{ family }}</h2>

    <ul>
      <li v-for="article in tech" :key="article.slug">
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

    const tech = await $content("tech", catergory, family)
      .sortBy("date", "desc")
      .fetch();

    return {
      tech,
      catergory,
      family,
    };
  },
};
</script>
