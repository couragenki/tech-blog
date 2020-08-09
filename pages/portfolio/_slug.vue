<template>
  <article>
    <h1>{{portfolio.title}}</h1>
    <dl>
      <dt>date</dt>
      <dd>{{portfolio.date}}</dd>
    </dl>
    <div>
      <img :src="portfolio.image" />
    </div>
    <div v-for="tag in portfolio.tags" :key="tag">{{tag}}</div>

    <nuxt-content :document="portfolio" />
  </article>
</template>

<script lang="ts">
export default {
  //@ts-ignore
  async asyncData({ $content, params }) {
    const portfolio = await $content(
      "portfolio",
      params.slug || "index"
    ).fetch();
    return { portfolio };
  },
};
</script>