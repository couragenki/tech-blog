<template>
  <n-link tag="div" class="card" :to="link">
    <div
      class="card-img-top"
      v-if="blogImage"
      :style="{ backgroundImage: 'url(' + blogImage + ')' }"
    >
      <div
        class="card-category"
        :class="{
          green: blogCategory == 'tech',
          red: blogCategory == 'marketing',
        }"
      >
        {{ blogCategory }}
      </div>
      <div class="card-title">
        <p
          class="card-title-text"
          :class="{
            green: blogCategory == 'tech',
            red: blogCategory == 'marketing',
          }"
        >
          {{ blogTitle }}
        </p>
      </div>
    </div>
    <div class="card-img-top shape" v-else>
      <div
        class="card-category"
        :class="{
          green: blogCategory == 'tech',
          red: blogCategory == 'marketing',
        }"
      >
        {{ blogCategory }}
      </div>
      <div class="card-title">
        <p
          class="card-title-text"
          :class="{
            green: blogCategory == 'tech',
            red: blogCategory == 'marketing',
          }"
        >
          {{ blogTitle }}
        </p>
      </div>
    </div>
    <div class="card-body">
      <p class="card-date">{{ setDate(blogDate) }}</p>
      <p class="card-text">{{ blogText }}</p>
      <ul class="card-tag" v-for="(item, index) in blogTags" :key="index">
        <li>#{{ item }}&nbsp;</li>
      </ul>
    </div>
  </n-link>
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
    blogText: {
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

      return y + "/" + m + "/" + d;
    },
  },
};
</script>
<style scoped lang="scss">
@import "~~/node_modules/bootstrap/scss/bootstrap.scss";
.card {
  .card-category {
    width: fit-content;
    height: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 2px 4px;
    margin-left: -8px;
    margin-bottom: 1rem;
    border-radius: 3px;
    color: black;
    text-shadow: 1px 1px 1px white, -1px 1px 1px white, 1px -1px 1px white,
      -1px -1px 1px white, 1px 0px 1px white, 0px 1px 1px white,
      -1px 0px 1px white, 0px -1px 1px white;
  }
  .card-img-top {
    height: auto;
    min-height: 9rem;
    max-height: 14rem;
    transition: all 0.5s;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    padding: 0 8px 8px;
    .card-title {
      margin: 0;
      .card-title-text {
        min-height: 4em;
        font-weight: 700;
        font-size: 1em;
        vertical-align: middle;
        padding: 8px;
        color: black;
        background: #ffffffcc;
        border: #9e9e9e solid 2px;
      }
      .red {
        border: #e80000 solid 2px;
      }
      .green {
        border: #37e437 solid 2px;
      }
    }
    .red {
      background: #e80000;
    }
    .green {
      background: #37e437;
    }
  }
  .card-body {
    position: relative;
    min-height: 8rem;
    padding: 8px;
    max-height: 5rem;
    .card-date {
      margin: 0;
      font-size: 1em;
      font-weight: 700;
      margin-bottom: 0.3em;
      color: black;
    }
    .card-text {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      font-size: 0.8em;
      margin-top: 0;
      margin-bottom: 0.3em;
      color: black;
    }
    .card-tag {
      margin: 0;
      padding: 0;
      list-style: none;
      display: inline-block;
      -webkit-box-orient: vertical;
      overflow: hidden;
      li {
        color: black;
        font-size: 0.8em;
      }
    }
  }
  .shape {
    background: lightgrey;
  }
}
.card:hover {
  text-decoration: none;
  opacity: 0.7;
  .card-img-top {
    transition: all 0.5s;
    background-size: 120% 120%;
  }
}
</style>
