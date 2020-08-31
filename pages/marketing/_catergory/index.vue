<template>
  <DefaultTemplate :isPostsPage="true">
    <nuxt-link to="/marketing">⇦マーケティングの一覧ページへ戻る</nuxt-link>
    <h2>{{catergory}}に関する記事</h2>
    <PostCards :data="marketing" />

    <!-- TODO:ここ消すとgenerateで子ページが反映できない。 -->
    <h2>{{catergory}}に関する記事一覧</h2>
    <ul>
      <li v-for="article in marketing" :key="article.slug">
        <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
      </li>
    </ul>
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
import PostCards from "@/components/Organisms/postcards.vue";
export default {
  components: {
    DefaultTemplate,
    PostCards,
  },
  async asyncData({ $content, params }) {
    const { catergory, family, slug } = params;
    let query = $content('marketing', catergory, { deep: true }).sortBy("date", "desc");
    const marketing = await query.fetch();

    return {
      marketing,
      catergory
    };
  },
};
</script>
