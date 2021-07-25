<template>
  <div>
    <Header />
    <div
      v-if="post.image"
      class="post__img"
      :style="{ backgroundImage: 'url(' + post.image + ')' }"
    />

    <div
      v-else
      class="hero-bg"
      :class="{
        green: post.type == 'tech',
        red: post.type == 'business',
        yellow: post.type == 'notes',
      }"
    />

    <Container :is-posts-page="isPostsPage" :is-sidebar="isSidebar">
      <PostContent
        :post="post"
        :catergory="catergory"
        :family="family"
        v-on="setMeta(post)"
      />
    </Container>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Organisms/header.vue'
import Container from '@/components/Organisms/container.vue'
import Footer from '@/components/Organisms/footer.vue'
import PostContent from '@/components/Organisms/postcontent.vue'
export default {
  name: 'PostTemplate',
  components: {
    Header,
    Container,
    Footer,
    PostContent
  },
  props: {
    isPostsPage: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    isSidebar: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    post: {
      type: Object,
      default: () => {
        return {}
      }
    },
    catergory: {
      type: String,
      default: () => {
        return null
      }
    },
    family: {
      type: String,
      default: () => {
        return null
      }
    }
  },
  data () {
    return {
      pageMetaTitle: '',
      pageMetaDescription: '',
      pageMetaImg: ''
    }
  },
  methods: {
    setMeta (post) {
      this.pageMetaTitle = post.title
      this.pageMetaDescription = post.description
      this.pageMetaImg = post.image
    }
  },
  head () {
    const metaTitle = this.pageMetaTitle
    const metaDescription = this.pageMetaDescription
    const metaImg = this.pageMetaImg
    return {
      title: metaTitle,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: metaTitle + ' | couragenki'
        },
        {
          hid: 'description',
          name: 'description',
          content: metaDescription
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: metaDescription
        },
        { hid: 'og:image', property: 'og:image', content: metaImg }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.post-heroimg {
  background-size: cover;
  position: relative;
  min-height: 450px;
  padding: 1em 0;
}
.post__img {
  // max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  min-height: 400px;
  background: no-repeat;
  background-size: cover;
  background-position: center;
}
.hero-bg {
  position: relative;
  min-height: 250px;
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
.post-title {
  width: 96%;
  font-size: 3em;
  max-width: 1240px;
  height: fit-content;
  text-align: center;
  background: #ffffffb3;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
@media (max-width: 768px) {
}
@media (min-width: 320px) {
}
</style>
