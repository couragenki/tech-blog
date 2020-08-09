<template>
  <div>
    <div v-for="n in frontend" :key="n.slug">
      <nuxt-link :to="'/tech/frontend/'+ n.slug">{{n.title}} {{n.date}}</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  async asyncData({ $content }: { $content: any }) {
    const query = await $content("tech/frontend" || "index").limit(15);
    const frontend = await query.fetch();
    return { frontend };
  },
};
</script>