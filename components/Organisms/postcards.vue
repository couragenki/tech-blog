<template>
  <div class="posts">
    <BlogCrad
      v-for="article in data"
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
</template>

<script>
import BlogCrad from "@/components/Molecules/blogcard.vue";
export default {
  name: "Postcards",
  components: {
    BlogCrad,
  },
  props: {
    data: {
      default: () => {
        return {};
      },
    },
  },
  methods: {
    setData(data) {},
  },
};
</script>
<style lang="scss" scoped>
@import "~~/node_modules/bootstrap/scss/bootstrap.scss";
.posts {
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .card {
    width: 24%;
    margin-bottom: 2rem;
  }
}
@media (max-width: 1187px) {
  .posts {
    .card {
      width: 32%;
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