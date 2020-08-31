<template>
  <DefaultTemplate :isPostsPage="true">
    <nuxt-link to="/">⇦ホームへ戻る</nuxt-link>
    <h1>Techページ</h1>
    <p>技術やプログラミングに関する記事をまとめています。</p>
    <PostCards :data="data" />
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
  async asyncData({ $content }) {
    let query = $content("tech", { deep: true }).sortBy("date", "desc");
    const tech = await query.fetch();
    const data = tech.sort(function(a,b){
      return new Date(b.date) - new Date(a.date);
    })

    return {
      data,
    };
  },
};
</script>
