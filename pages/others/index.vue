<template>
  <div>
    <div v-for="n in others" :key="n.slug">
      <nuxt-link :to="'/others/'+ n.slug">{{n.title}} {{n.date}}</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  //@ts-ignore
  async asyncData({ $content }: { $content: any }) {
    const query = await $content("others" || "index").limit(15);
    const others = await query.fetch();
    return { others };
  },
};
</script>