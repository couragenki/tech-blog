<template>
  <div>
    <Header />
    <Navigation />
    <div>{{　post.title || '投稿タイトル'　}}</div>
    <Container :isPostsPage="isPostsPage" :isSidebar="isSidebar" >
      <PostContent :post="post" :catergory="catergory" :family="family" />
    </Container>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Organisms/header.vue";
import Navigation from "@/components/Organisms/navigation.vue";
import Container from "@/components/Organisms/container.vue";
import Footer from "@/components/Organisms/footer.vue";
import PostContent from "@/components/Organisms/postcontent.vue";
export default {
  name: "PostTemplate",
  components: {
    Header,
    Navigation,
    Container,
    Footer,
    PostContent,
  },
  props:{
    isPostsPage: {
      type: Boolean,
      default: () => { return false }
    },
    isSidebar: {
      type: Boolean,
      default: () => { return true }
    },
    post: {
      type: Object,
      default: () => { return {} }
    },
    catergory: {
      type: String,
      default: () => { return null }
    },
    family: {
      type: String,
      default: () => { return null }
    },
    heroImg: {
      type: String,
      default: () => { return '' }
    }
  },
};
</script>
<style lang="scss" scoped>
@media (max-width: 768px) {
  .navigation {
    display: none;
  }
}
@media (max-width: 320px) {
}
</style>