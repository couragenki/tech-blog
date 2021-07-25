<template>
  <PostTemplate
    v-if="tech.title"
    :is-posts-page="true"
    :post="tech"
    :catergory="catergory"
    :family="family"
  />
  <DefaultTemplate v-else :is-posts-page="true">
    <BackButton :link="'/tech/' + catergory" :text="catergory + 'の記事一覧へ戻る'" />
    <h2>{{ family }}に関する記事一覧</h2>
    <PostCards :data="tech" />
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from '@/components/Templates/defaulttemplate.vue'
import PostTemplate from '@/components/Templates/posttemplate.vue'
import PostCards from '@/components/Organisms/postcards.vue'
import BackButton from '@/components/Atoms/backbutton.vue'
export default {
  components: {
    DefaultTemplate,
    PostTemplate,
    PostCards,
    BackButton
  },
  async asyncData ({ $content, params }) {
    const { catergory, family } = params
    const tech = await $content('tech', catergory, family).fetch()
    return {
      tech,
      catergory,
      family
    }
  },
  data () {
    return {
      pageMetaTitle: '',
      pageMetaDescription: '',
      pageMetaImg: ''
    }
  },
  methods: {
    setMeta (family) {
      this.pageMetaTitle = family
      this.pageMetaDescription = family + 'に関する記事一覧を表示しています。'
      this.pageMetaImg = 'https://couragenki.com/common/og.jpg'
    }
  },
  head () {
    const metaTitle = this.pageMetaTitle
    const metaDescription = this.pageMetaDescription
    const metaImg = this.pageMetaImg
    return {
      title: metaTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: metaDescription
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: metaDescription
        },
        { hid: 'og:image', property: 'og:image', content: metaImg }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
