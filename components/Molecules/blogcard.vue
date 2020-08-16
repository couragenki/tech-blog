<template>
  <nuxt-link tag="div" class="blogcard" :to="link">
    <div class="blogcard__category">{{blogCcategory}}</div>
    <div class="blogcard__image" v-if="blogImage"></div>
    <div class="blogcard__shape" v-else></div>
    <div class="blogcard__text">{{blogTitle}}</div>
    <div class="blogcard__tags">
      <span v-for="(tag, index) in blogTags" :key="index">
        {{tag}}
      </span>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "BlogCrad",
  props: {
    link: {
      type: String,
      default: () => { return '/frontend' }
    },
    blogCcategory: {
      type: String,
      default: () => { return 'カテゴリー' }
    },
    blogImage: {
      type: String,
      default: () => { return '' }
    },
    blogTitle: {
      type: String,
      default: () => { return '記事タイトル' }
    },
    blogTags:{
      type: Array,
      default: () => { return ['tag1','tag2',] }
    }
  },
};
</script>
<style scoped lang="scss">
.blogcard {
  background: lightgrey;
  &__category {
    position: absolute;
    background: green;
    display: inline;
  }
  width: 240px;
  height: 240px;
  position: relative;
  &__shape {
    width: 100%;
    height: 160px;
    background: gray;
  }
  &__tags {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
}
.blogcard:hover {
  opacity: 0.7;
}
</style>
