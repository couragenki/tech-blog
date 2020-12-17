<template>
  <PostTemplate
    v-if="$i18n.locale === 'en'"
    :isPostsPage="true"
    :post="enArticle"
  />
  <PostTemplate v-else :isPostsPage="true" :post="jpArticle" />
</template>

<script>
import PostTemplate from "@/components/Templates/posttemplate.vue";
export default {
  components: {
    PostTemplate,
  },
  data() {
    return {
      pageTitle: "",
      pageDescription: "",
    };
  },
  async asyncData({ $content, params, error }) {
    let jpArticle;
    let enArticle;
    try {
      jpArticle = await $content("marketing", params.slug).fetch();
    } catch (e) {
      error({ message: "jpArticle not found" });
    }
    try {
      enArticle = await $content("/en/marketing", params.slug).fetch();
    } catch (e) {
      error({ message: "enArticle not found" });
    }

    return {
      jpArticle,
      enArticle,
    };
  },
};
</script>
