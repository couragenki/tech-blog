<template>
  <div>
    <Header />
    <Navigation />
    <h2>TOP PAGE</h2>
    <!-- static -->
    <img src="/img/sample.jpg" />
    <!-- assets -->
    <img src="~/assets/img/sample.jpg" />
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from "@/components/Organisms/header.vue";
import Navigation from "@/components/Organisms/navigation.vue";
import Footer from "@/components/Organisms/footer.vue";

export default {
  components: {
    Header,
    Navigation,
    Footer,
  },
};
</script>

<style scoped lang="scss">
</style>
