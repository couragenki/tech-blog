<template>
  <div class="wrapper">
    <div class="container" v-if="isSidebar">
      <div class="content" :class="{ PostStyle: isPostsPage }">
        <slot />
      </div>
      <!-- <SideBar /> -->
    </div>
    <div class="container" v-else>
      <div class="content" :class="{ PostStyle: isPostsPage, full: !isSidebar }">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/Organisms/sidebar.vue";
export default {
  name: "Container",
  components: {
    SideBar,
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
    max-width: 1240px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 40px 0 80px;
    .content {
      width: 100%;
      // width: calc(100% - 240px);
      // margin-right: 24px;
    }
    .full {
      width: 100%;
    }
  }
}
@media (max-width: 914px) {
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

.PostStyle {
  /deep/ * {
    font-family: "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック体",
      "YuGothic", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ",
      "Meiryo", "verdana", sans-serif;
  }
  /deep/ img {
    max-width: 100%;
  }
  /deep/ h1 {
    font-size: 2em;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  /deep/ h2 {
    font-size: 1.6em;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  /deep/ h3 {
    font-size: 1.2rem;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  /deep/ P {
    line-height: 1.5em;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  /deep/ ul {
    padding-left: 1em;
    list-style: square;
    padding-left: 1.5em;
  }
  /deep/ ol {
    padding-left: 1.5em;
  }
  /deep/ li {
    margin-bottom: 0.5em;
  }
}
@media (max-width: 768px) {
  .nuxt-content {
    /deep/ h1 {
      font-size: 2rem;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
    /deep/ h2 {
      font-size: 1.6rem;
      margin-top: 1.2rem;
      margin-bottom: 1.2rem;
    }
    /deep/ h3 {
      font-size: 1.4rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    /deep/ P {
      line-height: 1.2em;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    /deep/ ul {
      padding-left: 1em;
      list-style: square;
      padding-left: 1.5em;
    }
    /deep/ ol {
      padding-left: 1.5em;
    }
    /deep/ li {
      margin-bottom: 0.5em;
    }
  }
}
</style>