<template>
  <article>
    <h1>{{others.title}}</h1>
    <dl>
      <dt>date</dt>
      <dd>{{others.date}}</dd>
    </dl>
    <div>
      <img :src="others.image" />
    </div>
    <div v-for="tag in others.tags" :key="tag">{{tag}}</div>

    <nuxt-content :document="others" />
  </article>
</template>

<script lang="ts">
export default {
  //@ts-ignore
  async asyncData({ $content, params }) {
    const others = await $content("others", params.slug || "index").fetch();
    return { others };
  },
};
</script>