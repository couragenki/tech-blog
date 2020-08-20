<template>
  <DefaultTemplate>
    <h2>TOP PAGE</h2>
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
import BlogCrad from "@/components/Molecules/blogcard.vue";
import NewPosts from "@/components/Organisms/newposts.vue";

export default {
  components: {
    DefaultTemplate,
    BlogCrad,
    NewPosts,
  },
};
</script>

<style scoped lang="scss">
</style>
