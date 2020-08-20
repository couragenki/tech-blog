<template>
  <div class="sidebar">
    <div class="intoro">
      <div class="sidebar__title">自己紹介</div>
      <Introduction />
    </div>
    <div class="pickup">
      <div class="sidebar__title">注目されている記事</div>
      <div class="pickup__post">
        <div class="pickup__post__rank">第1位</div>
        <BlogCrad />
      </div>
      <div class="pickup__post">
        <div class="pickup__post__rank">第2位</div>
        <BlogCrad />
      </div>
      <div class="pickup__post">
        <div class="pickup__post__rank">第3位</div>
        <BlogCrad />
      </div>
      <div class="pickup__post">
        <div class="pickup__post__rank">第4位</div>
        <BlogCrad />
      </div>
      <div class="pickup__post">
        <div class="pickup__post__rank">第5位</div>
        <BlogCrad />
      </div>
    </div>
  </div>
</template>

<script>
import Introduction from "@/components/Molecules/introduction.vue";
import BlogCrad from "@/components/Molecules/blogcard.vue";
export default {
  name: "Sidebar",
  components: {
    BlogCrad,
    Introduction
  }
};
</script>
<style lang="scss" scoped>

.sidebar {
  width: 268px;
  padding: 0 16px;
  height: auto;
  background: #ebf8fd;
  &__title {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 16px;
    }
  }

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
}
@media (max-width: 320px) {
}
</style>