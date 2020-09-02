<template>
  <PostTemplate
    v-if="notes.title"
    :isPostsPage="true"
    :post="notes"
    :catergory="catergory"
    :family="family"
  />
  <DefaultTemplate v-else :isPostsPage="true">
    <BackButton :link="'/notes/' + catergory" :text="catergory + 'の記事一覧へ戻る'" />
    <h2>{{ family }}に関する記事一覧</h2>
    <PostCards :data="notes" />
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
  async asyncData({ $content, params }) {
    const { catergory, family, slug } = params;
    const notes = await $content("notes", catergory, family).fetch();
    return {
      notes,
      catergory,
      family,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
