<template>
  <DefaultTemplate :isPostsPage="true">
    <BackButton link="/notes" text="その他の一覧ページへ戻る" />
    <h2>{{catergory}}に関する記事</h2>
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
  async asyncData({ $content, params }) {
    const { catergory, family, slug } = params;
    let query = $content("notes" + "/" + catergory, { deep: true }).sortBy(
      "date",
      "desc"
    );
    const notes = await query.fetch();

    return {
      notes,
      catergory,
    };
  },
};
</script>
