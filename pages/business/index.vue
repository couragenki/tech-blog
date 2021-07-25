<template>
  <DefaultTemplate :is-posts-page="true">
    <h2>ビジネスサイド</h2>
    <p>ビジネスサイドに関する記事をまとめています</p>
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
  async asyncData ({ $content }) {
    const query = $content('business', { deep: true }).sortBy('date', 'desc')
    const business = await query.fetch()

    return { business }
  },
  head: {
    titleTemplate: 'ビジネスサイド | couragenki',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'ビジネスサイドに関するページです。SNSやブログに関する記事を見つけることができます。'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'ビジネスサイド | couragenki'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'ビジネスサイドに関するページです。SNSやブログに関する記事を見つけることができます。'
      }
    ]
  }
}
</script>
