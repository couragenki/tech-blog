<template>
  <PostTemplate
    v-if="enTech.title && $i18n.locale === 'en'"
    :isPostsPage="true"
    :post="jpTech"
    :catergory="catergory"
    :family="family"
  />
  <PostTemplate
    v-else-if="jpTech.title && $i18n.locale === 'jp'"
    :isPostsPage="true"
    :post="jpTech"
    :catergory="catergory"
    :family="family"
  />
  <DefaultTemplate v-else :isPostsPage="true">
    <BackButton
      :link="$i18n.path('/tech/' + catergory)"
      :text="setButtonText(catergory)"
    />
    <h2>{{ family }}に関する記事一覧</h2>
    <PostCards v-if="$i18n.locale === 'en'" :data="enTech" />
    <PostCards v-else :data="jpTech" />
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
          hid: "description",
          name: "description",
          content: metaDescription,
        },
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
    setButtonText(catergory) {
      if (this.$i18n.locale === "en") {
        return "Back to" + catergory + "List Page";
      } else {
        return catergory + "の記事一覧へ戻る";
      }
    },
  },
  async asyncData({ $content, params }) {
    const { catergory, family, slug } = params;
    const jpTech = await $content("tech", catergory, family).fetch();
    const enTech = await $content("/en/tech", catergory, family).fetch();
    return {
      jpTech,
      enTech,
      catergory,
      family,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
