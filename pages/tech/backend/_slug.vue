<template>
  <article>
    <h1>{{backend.title}}</h1>
    <dl>
      <dt>date</dt>
      <dd>{{backend.date}}</dd>
    </dl>
    <div>
      <img :src="backend.image" />
    </div>
    <div v-for="tag in backend.tags" :key="tag">{{tag}}</div>

    <nuxt-content :document="backend" />
  </article>
</template>

<script lang="ts">
export default {
  //@ts-ignore
  async asyncData({ $content, params }) {
    const backend = await $content(
      "tech/backend",
      params.slug || "index"
    ).fetch();
    return { backend };
  },
};
</script>