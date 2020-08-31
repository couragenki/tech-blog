<template>
    <nuxt-link tag="div" class="card" :to="link">
      <div class="card-img-top" v-if="blogImage" :style="{ backgroundImage: 'url(' + blogImage + ')'}">
        <div class="card-category" :class="{green: blogCategory == 'tech', red: blogCategory == 'marketing', yellow: blogCategory == 'notes'}">{{blogCategory}}</div>
        <div class="card-title">
          <p class="card-title-text">{{blogTitle}}</p>
        </div>
      </div>
      <div class="card-img-top shape" v-else>
        <div class="card-category" :class="{green: blogCategory == 'tech', red: blogCategory == 'marketing', yellow: blogCategory == 'notes'}">{{blogCategory}}</div>
        <div class="card-title">
          <p class="card-title-text">{{blogTitle}}</p>
        </div>
      </div>
      <div class="card-body">
        <p class="card-date">{{setDate(blogDate)}}</p>
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
        return "/img/sample1.jpg";
      },
    },
    blogTitle: {
      type: String,
      default: () => {
        return "記事タイトル";
      },
    },
    blogDate: {
      type: String,
      default: () => {
        return null;
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
  methods: {
    setDate(date) {
      if (!date) return "不明";

      const y = date.substring(0, 4);
      const m = date.substring(5, 7);
      const d = date.substring(8, 10);

      return y + "年" + m + "月" + d + "日";
    },
  },
};
</script>
<style scoped lang="scss">
@import "~~/node_modules/bootstrap/scss/bootstrap.scss";
.card {
  .card-category {
    width: fit-content;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 2px 4px;
    border-radius: 4px;
  }
  .card-img-top {
    min-height: 9rem;
    .card-title {
      padding: 2rem 8px 2rem 8px;
      .card-title-text {
        font-weight: 700;
        font-size: 1.2em;
        padding: 8px;
        background: #ffffffb3;
      }
    }
  }
  .card-body {
    position: relative;
    min-height: 8rem;
    padding: 8px;
    max-height: 5rem;
    .card-date {
      margin: 0;
      font-size: 0.6em;
      margin-bottom: 0.6em;
    }
    .card-text {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      font-size: 0.8em;
      margin-bottom: 0.8em;
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
.card:hover{
  opacity: 0.7;
}
.red {
  background: #e80000;
}
.green {
  background: #37e437;
}
.yellow {
  background: rgb(255, 255, 69);
}
</style>
