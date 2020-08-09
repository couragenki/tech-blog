<template>
  <div>
    <div v-for="n in tech" :key="n.slug">
      <nuxt-link :to="'/tech/'+ n.slug">{{n.title}} {{n.date}}</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  async asyncData({ $content }: { $content: any }) {
    const query = await $content("tech" || "index").limit(15);
    const tech = await query.fetch();
    return { tech };
  },
};
</script>