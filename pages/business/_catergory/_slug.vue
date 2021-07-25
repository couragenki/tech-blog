<template>
  <PostTemplate :is-posts-page="true" :post="article" :catergory="catergory" :family="family" />
</template>

<script>
import PostTemplate from '@/components/Templates/posttemplate.vue'
export default {
  components: {
    PostTemplate
  },
  async asyncData ({ $content, params, error }) {
    let article

    try {
      article = await $content('business', params.slug).fetch()
    } catch (e) {
      error({ message: 'business-data not found' })
    }

    return {
      article
    }
  },
  head: {
    titleTemplate: 'ビジネスサイド | couragenki',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'ビジネスサイドに関するページです。SNSやブログに関する記事を見つけることができます。'
      }
    ]
  }
}
</script>
