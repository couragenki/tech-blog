<template>
  <div>
    <div v-for="n in books" :key="n.slug">
      <nuxt-link :to="'/books/'+ n.slug">{{n.title}} {{n.date}}</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  //@ts-ignore
  async asyncData({ $content }: { $content: any }) {
    const query = await $content("books" || "index").limit(15);
    const books = await query.fetch();
    return { books };
  },
};
</script>