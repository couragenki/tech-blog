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
    const { catergory, family, slug } = params;
    let jpArticle;
    let enArticle;
    try {
      jpArticle = await $content("tech", params.slug).fetch();
    } catch (e) {
      error({ message: "jpTech not found" });
    }
    try {
      enArticle = await $content("/en/tech", params.slug).fetch();
    } catch (e) {
      error({ message: "enTech not found" });
    }

    return {
      jpArticle,
      enArticle,
    };
  },
};
</script>
