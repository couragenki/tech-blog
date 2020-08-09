<template>
  <div>
    <div v-for="n in backend" :key="n.slug">
      <nuxt-link :to="'/tech/backend/'+ n.slug">{{n.title}} {{n.date}}</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  async asyncData({ $content }: { $content: any }) {
    const query = await $content("tech/backend" || "index").limit(15);
    const backend = await query.fetch();
    return { backend };
  },
};
</script>