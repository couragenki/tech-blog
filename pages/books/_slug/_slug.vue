<template>
  <article>
    <h1>{{books.title}}</h1>
    <dl>
      <dt>date</dt>
      <dd>{{books.date}}</dd>
    </dl>
    <div>
      <img :src="books.image" />
    </div>
    <div v-for="tag in books.tags" :key="tag">{{tag}}</div>

    <nuxt-content :document="books" />
  </article>
</template>

<script lang="ts">
export default {
  //@ts-ignore
  async asyncData({ $content, params }) {
    const books = await $content("books", params.slug || "index").fetch();
    return { books };
  },
};
</script>