<template>
  <div>
    <p>{{ showIndex + 1 }}/{{ setPostData.length }}ページ目</p>
    <div class="posts">
      <BlogCrad
        v-for="article in setPostData[showIndex]"
        :key="article.slug"
        :link="article.path"
        :blog-title="article.title"
        :blog-category="article.type"
        :blog-text="article.description"
        :blog-date="article.date || '2020'"
        :blog-tags="article.tags"
        :blog-image="article.image || null"
      />
    </div>
    <div class="sort__buttons">
      <button
        v-for="(item, index) in setPostData.length"
        :key="index"
        v-scroll-to="'#pageTop'"
        class="sort__buttons__button"
        :class="{dateActive: showIndex == index}"
        to
        @click="changeData(index)"
      >
        {{ index + 1 }}
      </button>
    </div>
  </div>
</template>

<script>
import BlogCrad from '@/components/Molecules/blogcard.vue'
export default {
  name: 'Postcards',
  components: {
    BlogCrad
  },
  props: {
    data: {
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      showIndex: 0
    }
  },
  computed: {
    setPostData () {
      const allNewsArray = []
      for (const i of Object.keys(this.data)) {
        allNewsArray.push(this.data[i])
      }
      allNewsArray.sort((a, b) => {
        return (a.date < b.date ? 1 : -1)
      })

      const allNewsArrayLength = allNewsArray.length
      const cut = 12
      const showArray = []
      for (let i = 0; i < Math.ceil(allNewsArrayLength / cut); i++) {
        const j = i * cut
        showArray.push(allNewsArray.slice(j, j + cut))
      }
      return showArray
    }
  },
  methods: {
    changeData (index) {
      this.showIndex = index
    }
  }
}
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
