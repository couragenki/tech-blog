<template>
  <article>
    <h1>{{frontend.title}}</h1>
    <dl>
      <dt>date</dt>
      <dd>{{frontend.date}}</dd>
    </dl>
    <div>
      <img :src="frontend.image" />
    </div>
    <div v-for="tag in frontend.tags" :key="tag">{{tag}}</div>

    <nuxt-content :document="frontend" />
  </article>
</template>

<script lang="ts">
export default {
  //@ts-ignore
  async asyncData({ $content, params }) {
    const frontend = await $content(
      "tech/frontend",
      params.slug || "index"
    ).fetch();
    return { frontend };
  },
};
</script>