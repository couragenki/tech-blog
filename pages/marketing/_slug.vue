<template>
  <article>
    <h1>{{marketing.title}}</h1>
    <dl>
      <dt>date</dt>
      <dd>{{marketing.date}}</dd>
    </dl>
    <div>
      <img :src="marketing.image" />
    </div>
    <div v-for="tag in marketing.tags" :key="tag">{{tag}}</div>

    <nuxt-content :document="marketing" />
  </article>
</template>

<script lang="ts">
export default {
  //@ts-ignore
  async asyncData({ $content, params }) {
    const marketing = await $content(
      "marketing",
      params.slug || "index"
    ).fetch();
    return { marketing };
  },
};
</script>