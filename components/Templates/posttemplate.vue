<template>
  <div>
    <Header />
    <Navigation />

    <div
      v-if="post.image"
      class="post-heroimg"
      :style="{ backgroundImage: 'url(' + 　post.image + ')'}"
    >
      <h1 class="post-title">{{ post.title || '投稿タイトル' }}</h1>
    </div>

    <div class="hero-bg" v-else>
      <h1 class="post-title">{{ post.title || '投稿タイトル' }}</h1>
    </div>

    <Container :isPostsPage="isPostsPage" :isSidebar="isSidebar">
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
  props: {
    isPostsPage: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    isSidebar: {
      type: Boolean,
      default: () => {
        return true;
      },
    },
    post: {
      type: Object,
      default: () => {
        return {};
      },
    },
    catergory: {
      type: String,
      default: () => {
        return null;
      },
    },
    family: {
      type: String,
      default: () => {
        return null;
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.post-heroimg {
  background-size: cover;
  position: relative;
  min-height: 250px;
}
.hero-bg {
  position: relative;
  min-height: 250px;
  background: #75a6ff;
}
.post-title {
  width: 96%;
  max-width: 1200px;
  height: 100px;
  height: fit-content;
  text-align: center;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
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