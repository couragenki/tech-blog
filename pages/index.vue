<template>
  <div>
    <Header />
    <h2>TOP PAGE</h2>
    <!-- static -->
    <img src="/img/sample.jpg" />
    <!-- assets -->
    <img src="~/assets/img/sample.jpg" />
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
