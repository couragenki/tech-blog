export default {
  modules: [
    '@nuxt/content'
  ],
  plugins: [{ src: '~plugins/ga.js', mode: 'client' }],
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
    title: process.env.npm_package_name || 'couragenki',
    titleTemplate: '%s | couragenki',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'Courage(勇気)とGenki(元気)を届けるWEBブログです。WEB技術やマーケティングなどを記事にしていきます' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'couragenki' },
      { hid: 'og:type', property: 'og:type', content: 'blog' },
      { hid: 'og:url', property: 'og:url', content: 'https://couragenki.com' },
      { hid: 'og:title', property: 'og:title', content: 'couragenki' },
      { hid: 'og:description', property: 'og:description', content: 'Courage(勇気)とGenki(元気)を届けるWEBブログです。WEB技術やマーケティングなどを記事にしていきます' },
      { hid: 'og:image', property: 'og:image', content: 'https://couragenki.com/common/og.jpg' },
      { hid: 'twitter:card', neme: 'twitter:card', content: "summary_large_image" },
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
      './assets/styles/_variables.scss',
    ]
  },
}
