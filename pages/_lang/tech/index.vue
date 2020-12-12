<template>
  <DefaultTemplate :isPostsPage="true">
    <BackButton :to="$i18n.path('')" :text="$t('links.returnhome')" />
    <h1>{{ $t("techpage.title") }}</h1>
    <p>{{ $t("techpage.text1") }}</p>
    <PostCards v-if="$i18n.locale === 'en'" :data="enData" />
    <PostCards v-else :data="jpData" />
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
    let setTitle;
    let setDisc;
    if (this.$i18n.locale === "en") {
      setTitle = "Tech | couragenki";
      setDisc =
        "This is a page about web technologies. I write various articles on front-end, back-end, etc.";
    } else {
      setDisc =
        "WEB技術に関するページです。フロントエンド、バックエンドなど様々な記事を書いています。";
      setTitle = "テック | couragenki";
    }
    return {
      title: setTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: setDisc,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: setTitle,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: setDisc,
        },
      ],
    };
  },
  async asyncData({ $content }) {
    let jpQuery = $content("tech", { deep: true }).sortBy("date", "desc");
    let enQuery = $content("/en/tech", { deep: true }).sortBy("date", "desc");
    const jpTech = await jpQuery.fetch();
    const enTech = await enQuery.fetch();
    const jpData = jpTech.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    const enData = enTech.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });

    return {
      jpData,
      enData,
    };
  },
};
</script>
