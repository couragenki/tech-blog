<template>
  <PostTemplate
    v-if="tech.title"
    :isPostsPage="true"
    :post="tech"
    :catergory="catergory"
    :family="family"
  />
<<<<<<< HEAD
  <DefaultTemplate v-else v-on="setMeta(family)" :isPostsPage="true">
    <nuxt-link :to="'/tech/' + catergory">⇦{{catergory}}の記事一覧へ戻る</nuxt-link>
=======
  <DefaultTemplate v-else :isPostsPage="true">
    <BackButton :link="'/tech/' + catergory" :text="catergory + 'の記事一覧へ戻る'" />
>>>>>>> feautre/set-meta
    <h2>{{ family }}に関する記事一覧</h2>
    <PostCards :data="tech" />
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
import PostTemplate from "@/components/Templates/posttemplate.vue";
import PostCards from "@/components/Organisms/postcards.vue";
import BackButton from "@/components/Atoms/backbutton.vue";
export default {
  components: {
    DefaultTemplate,
    PostTemplate,
    PostCards,
    BackButton,
  },
  data() {
    return {
      pageMetaTitle: '',
      pageMetaDescription: '',
      pageMetaImg: '',
    };
  },
  head() {
    const metaTitle = this.pageMetaTitle;
    const metaDescription = this.pageMetaDescription;
    const metaImg = this.pageMetaImg;
    return {
    title: metaTitle,
    meta: [
      {
        hid: "description",
        name: "description",
        content: metaDescription,
      },
      {
        hid: "og:description",
        name: "og:description",
        content: metaDescription,
      },
      { hid: 'og:image', property: 'og:image', content: metaImg },
    ],
    }
  },
  methods:{
    setMeta(family){
      this.pageMetaTitle = family
      this.pageMetaDescription = family + 'に関する記事一覧を表示しています。'
      this.pageMetaImg = 'https://couragenki.com/img/sample2.jpg'
    }
  },
  async asyncData({ $content, params }) {
    const { catergory, family, slug } = params;
    const tech = await $content("tech", catergory, family).fetch();
    return {
      tech,
      catergory,
      family,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
