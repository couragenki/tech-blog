<template>
  <div class="wrapper">
    <div class="container">
      <div class="content" :class="{ PostStyle: isPostsPage }">
        <slot />
      </div>
      <SideBar />
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/Organisms/sidebar.vue";
export default {
  name: "Container",
  components: {
    SideBar
  },
  props:{
    isPostsPage: {
      type: Boolean,
      default: () => { return false }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/_poststyle.scss";
.wrapper {
  width: auto;
  padding: 0 16px;
  .container {
    width: 100%;
    max-width: 1200px;
    display: flex;
    margin: 0 auto;
    .content {
      width:  calc(100% - 300px);
      min-height: 400px;
    }
  }

}
@media (max-width: 768px) {
  .wrapper {
    .container {
      display: block;
      .content {
        width: 100%;
      }
    }
  }
}
@media (max-width: 320px) {
}
</style>