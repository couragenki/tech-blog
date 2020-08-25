<template>
  <div class="wrapper">
    <div class="container" v-if="isSidebar">
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
    isSidebar: {
      type: Boolean,
      default: () => { return true }
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  width: auto;
  padding: 0 16px;
  min-height: 400px;
  .container {
    width: 100%;
    max-width: 1200px;
    display: flex;
    margin: 0 auto;
    padding: 40px 0 80px;
    .content {
      width:  calc(100% - 300px);
      margin-right: 24px;
    }
  }

}
@media (max-width: 768px) {
  .wrapper {
    .container {
      display: block;
      padding: 20px 0 30px;
      .content {
        width: 100%;
        padding-bottom: 30px;
      }
    }
  }
}
@media (max-width: 320px) {
}
.PostStyle {
  img {
    width: 100%;
  }
}
</style>