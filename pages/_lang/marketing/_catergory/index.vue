<template>
  <DefaultTemplate :isPostsPage="true">
    <BackButton :link="$i18n.path('marketing/')" :text="setButton()" />
    <h2>{{ setTitle(catergory) }}</h2>
    <p>{{ setDisc() }}</p>
    <PostCards v-if="$i18n.locale === 'en'" :data="enMarketing" />
    <PostCards v-else :data="jpMarketing" />
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
import PostCards from "@/components/Organisms/postcards.vue";
import BackButton from "@/components/Atoms/backbutton.vue";
export default {
  components: {
    DefaultTemplate,
    PostCards,
    BackButton,
  },
  head() {
    let disc;
    let title;
    if (this.$i18n.locale === "en") {
      disc =
        "This is a page about marketing, where you can find articles about social networking and blogging.";
      title = "Marketing | couragenki";
    } else {
      disc =
        "マーケティングに関するページです。SNSやブログに関する記事を見つけることができます。";
      title = "マーケティング | couragenki";
    }
    return {
      title: title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: disc,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: title,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: disc,
        },
      ],
    };
  },
  methods: {
    setButton() {
      if (this.$i18n.locale === "en") {
        return "Back to Marketing List Page";
      }
      return "マーケティングの一覧ページへ戻る";
    },
    setTitle(catergory) {
      if (this.$i18n.locale === "en") {
        return "Articles about " + catergory;
      }
      return catergory + "に関する記事";
    },
    setDisc() {
      if (this.$i18n.locale === "en") {
        return "This is a page about marketing, where you can find articles about social networking and blogging.";
      }
      return "マーケティングに関するページです。SNSやブログに関する記事を見つけることができます。";
    },
  },
  async asyncData({ $content, params }) {
    const { catergory, family, slug } = params;
    let jpQuery = $content("marketing", catergory, { deep: true }).sortBy(
      "date",
      "desc"
    );
    let enQuery = $content("/en/marketing", catergory, { deep: true }).sortBy(
      "date",
      "desc"
    );
    const jpMarketing = await jpQuery.fetch();
    const enMarketing = await enQuery.fetch();

    return {
      jpMarketing,
      enMarketing,
      catergory,
    };
  },
};
</script>
