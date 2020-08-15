<template>
  <DefaultTemplate>
    <h2>TOP PAGE</h2>
      <!-- static -->
      <img src="/img/sample.jpg" />
      <!-- assets -->
      <img src="~/assets/img/sample.jpg" />
  </DefaultTemplate>
</template>

<script lang="ts">
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
export default {
  components: {
    DefaultTemplate,
  },
};
</script>

<style scoped lang="scss">
</style>
