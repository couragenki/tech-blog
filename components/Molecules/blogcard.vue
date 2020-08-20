<template>
  <nuxt-link tag="div" class="blogcard" :to="link">
    <div class="blogcard__category">{{blogCategory}}</div>
    <div class="blogcard__image" v-if="blogImage">
      <p class="title">{{blogTitle}}</p>
    </div>
    <div class="blogcard__shape" v-else>
      <p class="title">{{blogTitle}}</p>
    </div>
    <div class="blogcard__text">
      {{blogText}}
    </div>
    <div class="blogcard__tags">
      <span v-for="(tag, index) in blogTags" :key="index">#{{tag}}&nbsp;</span>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "BlogCrad",
  props: {
    link: {
      type: String,
      default: () => {
        return "frontend";
      },
    },
    blogCategory: {
      type: String,
      default: () => {
        return "カテゴリー";
      },
    },
    blogImage: {
      type: String,
      default: () => {
        return "";
      },
    },
    blogTitle: {
      type: String,
      default: () => {
        return "記事タイトル";
      },
    },
    blogText:{
      type: String,
      default: () => {
        return "記事紹介文";
      },
    },
    blogTags: {
      type: Array,
      default: () => {
        return ["tag1", "tag2"];
      },
    },
  },
};
</script>
<style scoped lang="scss">
.blogcard {
  width: 268px;
  height: 268px;
  position: relative;
  background: lightgrey;
  &__category {
    position: absolute;
    background: green;
    display: inline;
  }
  &__shape {
    width: 100%;
    height: 160px;
    background: gray;
  }
  &__text {
    margin: 0;
    padding: 8px;
  }
  &__tags {
    width: auto;
    padding: 8px;
    position: absolute;
    bottom: 0;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
.blogcard:hover {
  opacity: 0.7;
}
.title {
  font-size: 20px;
  font-weight: 700;
  padding-top: 48px;
  padding-left: 8px;
  padding-right: 8px;
}
@media (max-width: 768px) {
}
@media (max-width: 376px) {
}
</style>
