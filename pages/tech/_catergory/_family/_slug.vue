<template>
  <DefaultTemplate :isPostsPage="true">
    <PostContent
      :post="article"
      :catergory="catergory"
      :family="family"
    />
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
import PostContent from "@/components/Organisms/postcontent.vue";

export default {
  components: {
    DefaultTemplate,
    PostContent,
  },
  async asyncData({ $content, params, route, error }) {
    const { catergory, family, slug } = params;
    let article;

    try {
      article = await $content('tech', catergory, family, slug).fetch();
    } catch (e) {
      error({ message: "tech-family-data not found" });
    }

    return {
      article,
      catergory,
      family
    };
  },
};
</script>
