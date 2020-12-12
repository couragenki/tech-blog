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

    jpArticle = await $content("marketing", params.slug).fetch();
    enArticle = await $content("/en/marketing", params.slug).fetch();

    return {
      jpArticle,
      enArticle,
    };
  },
};
</script>
