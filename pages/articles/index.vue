<template>
  <div>
    <div v-for="n in articles" :key="n.slug">
      <nuxt-link :to="'/articles/'+ n.slug">{{n.title}} {{n.date}}</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  async asyncData({ $content, params: { params: any } }) {
    const query = await $content("articles" || "index").limit(15);
    const articles = await query.fetch();
    return { articles };
  },
};
</script>