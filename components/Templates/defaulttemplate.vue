<template>
  <div>
    <Header />
    <!-- <Navigation /> -->
    <Container v-if="isContainer" :isPostsPage="isPostsPage" :isSidebar="isSidebar">
      <slot />
    </Container>
    <slot v-else />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Organisms/header.vue";
import Navigation from "@/components/Organisms/navigation.vue";
import Container from "@/components/Organisms/container.vue";
import Footer from "@/components/Organisms/footer.vue";
export default {
  name: "DefaultTemplate",
  components: {
    Header,
    Navigation,
    Container,
    Footer,
  },
  props: {
    isPostsPage: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    isSidebar: {
      type: Boolean,
      default: () => {
        return true;
      },
    },
    isContainer: {
      type: Boolean,
      default: () => {
        return true;
      },
    },
  },
};
</script>
<style lang="scss" scoped>
@media (max-width: 768px) {
}
@media (max-width: 320px) {
}
</style>