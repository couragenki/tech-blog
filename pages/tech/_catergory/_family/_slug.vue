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
    const { catergory, family, slug } = params
    let article

    try {
      article = await $content('tech', catergory, family, slug).fetch()
    } catch (e) {
      error({ message: 'tech-family-data not found' })
    }

    return {
      article,
      catergory,
      family
    }
  }
}
</script>
