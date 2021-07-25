<template>
  <DefaultTemplate :is-posts-page="true">
    <BackButton link="/business" text="ビジネスサイドの一覧ページへ戻る" />
    <h2>{{ catergory }}に関する記事</h2>
    <PostCards :data="business" />
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
    const { catergory, family, slug } = params
    const query = $content('business', catergory, { deep: true }).sortBy(
      'date',
      'desc'
    )
    const business = await query.fetch()

    return {
      business,
      catergory
    }
  },
  head: {
    titleTemplate: 'ビジネスサイド | couragenki',
    meta: [
      { hid: 'description', name: 'description', content: 'ビジネスサイドに関するページです。SNSやブログに関する記事を見つけることができます。' },
      { hid: 'og:title', property: 'og:title', content: 'ビジネスサイド | couragenki' },
      { hid: 'og:description', name: 'og:description', content: 'ビジネスサイドに関するページです。SNSやブログに関する記事を見つけることができます。' }
    ]
  }
}
</script>
