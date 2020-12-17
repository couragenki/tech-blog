<template>
  <PostTemplate
    v-if="enMarketing.title && $i18n.locale === 'en'"
    :isPostsPage="true"
    :post="enMarketing"
    :catergory="catergory"
    :family="family"
  />
  <PostTemplate
    v-else-if="jpMarketing.title && $i18n.locale === 'jp'"
    :isPostsPage="true"
    :post="jpMarketing"
    :catergory="catergory"
    :family="family"
  />
  <DefaultTemplate v-else :isPostsPage="true">
    <BackButton
      :link="$i18n.path('marketing/' + catergory)"
      :text="setButtonText(catergory)"
    />
    <h2>{{ settitle(family) }}</h2>
    <PostCards v-if="$i18n.locale === 'en'" :data="enMarketing" />
    <PostCards v-else :data="jpMarketing" />
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
    settitle(family) {
      if (this.$i18n.locale === "en") {
        return "Articles about " + family;
      } else {
        return family + "に関する記事一覧";
      }
    },
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
    let jpMarketing;
    let enMarketing;
    try {
      jpMarketing = await $content("marketing", catergory, family).fetch();
    } catch (e) {
      error({ message: "jpMarketing not found" });
    }
    try {
      enMarketing = await $content("/en/marketing", catergory, family).fetch();
    } catch (e) {
      error({ message: "enMarketing not found" });
    }

    return {
      jpMarketing,
      enMarketing,
      catergory,
      family,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
