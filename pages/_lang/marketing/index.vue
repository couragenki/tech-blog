<template>
  <DefaultTemplate :isPostsPage="true">
    <BackButton :to="$i18n.path('')" :text="$t('links.returnhome')" />
    <h1>{{ $t("markepage.title") }}</h1>
    <p>{{ $t("markepage.text1") }}</p>
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
      setTitle = "Marketing | couragenki";
      setDisc =
        "This is a page about marketing, where you can find articles about social networking and blogging.";
    } else {
      setDisc =
        "マーケティングに関するページです。SNSやブログに関する記事を見つけることができます。";
      setTitle = "マーケティング | couragenki";
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
    let jpQuery = $content("marketing", { deep: true }).sortBy("date", "desc");
    let enQuery = $content("/en/marketing", { deep: true }).sortBy(
      "date",
      "desc"
    );
    const jpMarketing = await jpQuery.fetch();
    const enMarketing = await enQuery.fetch();
    const jpData = jpMarketing.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    const enData = enMarketing.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });

    return {
      jpData,
      enData,
    };
  },
};
</script>
