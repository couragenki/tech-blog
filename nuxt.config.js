export default {
  modules: [
    '@nuxt/content'
  ],
  buildModules: [
    ['@nuxt/typescript-build', {
      typeCheck: true,
      ignoreNotFoundWarnings: true
    }]
  ],
  typescript: {
    typeCheck: {
      eslint: true
    }
  },
  head: {
    title: 'genki-blog',
    meta: [
      { charset: 'utf-8' },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  loaders: {
    ts: {
      silent: true
    },
    tsx: {
      silent: true
    }
  },
  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content('articles' || 'index').fetch()

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  }
}
