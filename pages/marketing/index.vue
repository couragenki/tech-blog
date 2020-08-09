<template>
  <div>
    <div v-for="n in marketing" :key="n.slug">
      <nuxt-link :to="'/marketing/'+ n.slug">{{n.title}} {{n.date}}</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  async asyncData({ $content }: { $content: any }) {
    const query = await $content("marketing" || "index").limit(15);
    const marketing = await query.fetch();
    return { marketing };
  },
};
</script>