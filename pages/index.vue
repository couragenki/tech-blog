<template>
  <div>
    <Header />
    <h2>TOP PAGE</h2>
    <!-- static -->
    <img src="/img/sample.jpg" />
    <!-- assets -->
    <img src="~/assets/img/sample.jpg" />

    <n-link to="articles">articles</n-link>
    <n-link to="tech">tech</n-link>
    <n-link to="books">books</n-link>
    <n-link to="marketing">marketing</n-link>
    <n-link to="portfolio">portfolio</n-link>
    <n-link to="others">others</n-link>
  </div>
</template>

<script lang="ts">
import Header from "@/components/Organisms/header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style scoped lang="scss">
</style>
