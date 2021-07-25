<template>
  <DefaultTemplate :is-posts-page="true">
    <BackButton link="/tech" text="技術の一覧ページへ戻る" />
    <h2>{{ catergory }}に関する記事</h2>
    <PostCards :data="tech" />
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from '@/components/Templates/defaulttemplate.vue'
import PostCards from '@/components/Organisms/postcards.vue'
import BackButton from '@/components/Atoms/backbutton.vue'
export default {
  components: {
    DefaultTemplate,
    PostCards,
    BackButton
  },
  async asyncData ({ $content, params }) {
    const { catergory } = params
    const query = $content('tech', catergory, { deep: true }).sortBy(
      'date',
      'desc'
    )
    const tech = await query.fetch()

    return {
      tech,
      catergory
    }
  },
  head: {
    title: 'テック',
    meta: [
      { hid: 'description', name: 'description', content: 'WEB技術に関するページです。フロントエンド、バックエンドなど様々な記事を見つけることが可能です。' },
      { hid: 'og:title', property: 'og:title', content: 'テック | couragenki' },
      { hid: 'og:description', name: 'og:description', content: 'WEB技術に関するページです。フロントエンド、バックエンドなど様々な記事を見つけることが可能です。' }
    ]
  }
}
</script>
