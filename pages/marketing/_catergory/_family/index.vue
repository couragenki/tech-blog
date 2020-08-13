<template>
  <div>
    <nuxt-link to="/marketing">marketing</nuxt-link>
    <h2>{{ catergory }}/{{ family }}</h2>

    <ul>
      <li v-for="article in marketing" :key="article.slug">
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

    const marketing = await $content("marketing", catergory, family)
      .sortBy("date", "desc")
      .fetch();

    return {
      marketing,
      catergory,
      family,
    };
  },
};
</script>
