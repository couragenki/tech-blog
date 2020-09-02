<template>
  <PostTemplate
    v-if="marketing.title"
    :isPostsPage="true"
    :post="marketing"
    :catergory="catergory"
    :family="family"
  />
  <DefaultTemplate v-else :isPostsPage="true">
    <BackButton :link="'/marketing/' + catergory" :text="catergory + 'の記事一覧へ戻る'" />
    <h2>{{ family }}に関する記事一覧</h2>
    <PostCards :data="marketing" />
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
      pageMetaTitle: "",
      pageMetaDescription: "",
      pageMetaImg: "",
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
          hid: "og:title",
          property: "og:title",
          content: metaTitle + " | couragenki",
        },
        { hid: "description", name: "description", content: metaDescription },
        {
          hid: "og:description",
          name: "og:description",
          content: metaDescription,
        },
        { hid: "og:image", property: "og:image", content: metaImg },
      ],
    };
  },
  methods: {
    setMeta(family) {
      this.pageMetaTitle = family;
      this.pageMetaDescription = family + "に関する記事一覧を表示しています。";
      this.pageMetaImg = "https://couragenki.com/common/og.jpg";
    },
  },
  async asyncData({ $content, params }) {
    const { catergory, family, slug } = params;
    const marketing = await $content("marketing", catergory, family).fetch();
    return {
      marketing,
      catergory,
      family,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
