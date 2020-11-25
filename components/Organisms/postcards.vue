<template>
  <div>
    <p>{{ showIndex + 1 }}/{{ setPostData.length }}ページ目</p>
    <div class="posts">
      <BlogCrad
        v-for="article in setPostData[showIndex]"
        :key="article.slug"
        :link="article.path"
        :blogTitle="article.title"
        :blogCategory="article.type"
        :blogText="article.description"
        :blogDate="article.date || '2020'"
        :blogTags="article.tags"
        :blogImage="article.image || null"
      />
    </div>
    <div class="sort__buttons">
      <button
        class="sort__buttons__button"
        v-for="(item, index) in setPostData.length"
        :key="index"
        v-on:click="changeData(index)"
        :class="{ dateActive: showIndex == index }"
        v-scroll-to="'#pageTop'"
        to
      >
        {{ index + 1 }}
      </button>
    </div>
  </div>
</template>

<script>
import BlogCrad from "@/components/Molecules/blogcard.vue";
export default {
  name: "Postcards",
  components: {
    BlogCrad,
  },
  data() {
    return {
      showIndex: 0,
    };
  },
  props: {
    data: {
      default: () => {
        return {};
      },
    },
  },
  computed: {
    setPostData() {
      let japaneseArray = [];
      let englishArray = [];

      for (let i of Object.keys(this.data)) {
        if (this.data[i].path.slice(0, 4) === "/en/") {
          englishArray.push(this.data[i]);
          englishArray.sort((a, b) => {
            return a.date < b.date ? 1 : -1;
          });
        } else {
          japaneseArray.push(this.data[i]);
          japaneseArray.sort((a, b) => {
            return a.date < b.date ? 1 : -1;
          });
        }
      }

      if (this.$i18n.locale === "ja") {
        return this.cutArray(japaneseArray);
      }
      if (this.$i18n.locale === "en") {
        return this.cutArray(englishArray);
      }
    },
  },
  methods: {
    changeData(index) {
      this.showIndex = index;
    },
    cutArray(array) {
      let allArrayLength = array.length;
      let cut = 12;
      let calculatedArray = [];
      for (let i = 0; i < Math.ceil(allArrayLength / cut); i++) {
        let j = i * cut;
        calculatedArray.push(array.slice(j, j + cut));
      }
      return calculatedArray;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~~/node_modules/bootstrap/scss/bootstrap.scss";
.posts {
  padding: 0;
  list-style: none;
  display: inline-flex;
  justify-content: normal;
  flex-wrap: wrap;
  width: 100%;
  min-height: 400px;
  .card {
    width: 23%;
    margin: 0 1% 2rem;
  }
}
.dateActive {
  background: blue;
  color: white;
}
.sort__buttons {
  text-align: center;
  &__button {
    width: 30px;
    height: 30px;
    border-radius: 25%;
    margin-left: 2px;
    margin-right: 2px;
    border: none;
    text-align: center;
  }
}
@media (max-width: 1178px) {
  .posts {
    .card {
      width: 31%;
      margin: 0 1% 2rem;
    }
  }
}
@media (max-width: 860px) {
  .posts {
    .card {
      width: 48%;
    }
  }
}
@media (max-width: 596px) {
  .posts {
    .card {
      width: 100%;
      margin: 1rem 0;
    }
  }
}
</style>