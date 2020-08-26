<template>
  <nuxt-link tag="div" class="card" :to="link">
    <div class="card-img-top" v-if="blogImage">
      <div class="card-category">{{blogCategory}}</div>
        <div class="card-title">{{blogTitle}}</div>
      </div>
      <div class="card-img-top shape" v-else>
        <div class="card-category">{{blogCategory}}</div>
        <div class="card-title">{{blogTitle}}</div>
      </div>
      <div class="card-body">
        <p class="card-text">{{blogText}}</p>
        <ul class="card-tag" v-for="(item, index) in blogTags" :key="index">
          <li>#{{item}}&nbsp;</li>
        </ul>
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
        return "/tech";
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
@import "~~/node_modules/bootstrap/scss/bootstrap.scss";
.card {
  .card-category {
    width: fit-content;
    background: limegreen;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .card-img-top {
    min-height: 10rem;
    .card-title {
      padding: 3rem 8px 0 8px;
    }
  }
  .card-body {
    position: relative;
    min-height: 8rem;
    padding: 8px;
    max-height: 5rem;
    .card-text {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
    .card-tag {
      margin: 0;
      padding: 0;
      list-style: none;
      display: inline-block;
      -webkit-box-orient: vertical;
      overflow: hidden;
      li {
        font-size: 0.8em;
      }
    }
  }
  .shape {
    background: lightgrey;
  }
}
.blogcard:hover{
  opacity: 0.7;
}
</style>
