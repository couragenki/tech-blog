<template>
  <div>
    <nuxt-link to="/backend">backend</nuxt-link>
    <h2>{{ catergory }}/{{ family }}</h2>

    <ul>
      <li v-for="article in backend" :key="article.slug">
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

    const backend = await $content("backend", catergory, family)
      .sortBy("date", "desc")
      .fetch();

    return {
      backend,
      catergory,
      family,
    };
  },
};
</script>
