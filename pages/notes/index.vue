<template>
  <DefaultTemplate :isPostsPage="true">
    <BackButton link="/" text="ホームへ戻る" />
    <h2>その他 INDEX</h2>
    <p>その他に関する記事をまとめています</p>

    <PostCards :data="notes" />
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
  watchQuery: true,
  async asyncData({ $content }) {
    let query = $content("notes", { deep: true }).sortBy("date", "desc");
    const notes = await query.fetch();

    return { notes };
  },
};
</script>
