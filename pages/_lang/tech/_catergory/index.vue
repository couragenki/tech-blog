<template>
  <DefaultTemplate :isPostsPage="true">
    <BackButton :link="$i18n.path('/tech/')" :text="setButton()" />
    <h2>{{ setTitle(catergory) }}</h2>
    <p>{{ setDisc() }}</p>
    <PostCards v-if="$i18n.locale === 'en'" :data="enTech" />
    <PostCards v-else :data="jpTech" />
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
        "This is a page about web technologies. I write various articles on front-end, back-end, etc.";
      title = "Tech | couragenki";
    } else {
      disc =
        "WEB技術に関するページです。フロントエンド、バックエンドなど様々な記事を書いています。";
      title = "テック | couragenki";
    }
    return {
      title: "テック",
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
        return "Back to Technology List Page";
      }
      return "技術の一覧ページへ戻る";
    },
    setTitle(catergory) {
      if (this.$i18n.locale === "en") {
        return "Articles about " + catergory;
      }
      return catergory + "に関する記事";
    },
    setDisc() {
      if (this.$i18n.locale === "en") {
        return "This is a page about web technologies. I write various articles on front-end, back-end, etc.";
      }
      return "WEB技術に関するページです。フロントエンド、バックエンドなど様々な記事を書いています。";
    },
  },
  async asyncData({ $content, params }) {
    const { catergory, family, slug } = params;
    let jpQuery = $content("tech", catergory, { deep: true }).sortBy(
      "date",
      "desc"
    );
    let enQuery = $content("/en/tech", catergory, { deep: true }).sortBy(
      "date",
      "desc"
    );
    const jpTech = await jpQuery.fetch();
    const enTech = await enQuery.fetch();

    return {
      jpTech,
      enTech,
      catergory,
    };
  },
};
</script>
