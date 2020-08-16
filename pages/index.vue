<template>
  <DefaultTemplate>
    <h2>TOP PAGE</h2>
    <h3>新着記事</h3>
    <di8v>
       <BlogCrad />
    </di8v>
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
import BlogCrad from "@/components/Molecules/blogcard.vue";

export default {
  components: {
    DefaultTemplate,
    BlogCrad,
  },
};
</script>

<style scoped lang="scss">
</style>
