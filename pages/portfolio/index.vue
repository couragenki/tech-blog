<template>
  <div>
    <div v-for="n in portfolio" :key="n.slug">
      <nuxt-link :to="'/portfolio/'+ n.slug">{{n.title}} {{n.date}}</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  //@ts-ignore
  async asyncData({ $content }: { $content: any }) {
    const query = await $content("portfolio" || "index").limit(15);
    const portfolio = await query.fetch();
    return { portfolio };
  },
};
</script>