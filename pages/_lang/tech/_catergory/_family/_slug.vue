<template>
  <PostTemplate
    v-if="this.$i18n.locale === 'ja'"
    :isPostsPage="true"
    :post="jaArticle"
    :catergory="catergory"
    :family="family"
  />
  <PostTemplate
    v-else
    :isPostsPage="true"
    :post="enArticle"
    :catergory="catergory"
    :family="family"
  />
</template>

<script>
import PostTemplate from "@/components/Templates/posttemplate.vue";
export default {
  components: {
    PostTemplate,
  },

  async asyncData({ $content, params, error }) {
    const { catergory, family, slug } = params;
    let jaArticle;
    let enArticle;

    try {
      jaArticle = await $content("tech", catergory, family, slug).fetch();
      enArticle = await $content("/en/tech", catergory, family, slug).fetch();
    } catch (e) {
      error({ message: "tech-family-data not found" });
    }

    return {
      jaArticle,
      enArticle,
      catergory,
      family,
    };
  },
};
</script>
