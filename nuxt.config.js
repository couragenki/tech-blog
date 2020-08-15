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
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
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
  styleResources: {
    scss: [
      './assets/styles/_variables.scss'
    ]
  },
}
