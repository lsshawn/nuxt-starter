module.exports = {
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  build: {
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    ['@nuxtjs/content']
  ],
  content: {
    srcDir: '../content',
    layoutDir: 'layouts/content',
    route: "content",
    dirs: [
      ['articles', {
        layout: "article",
        permalink: ":slug"
      }],
      ['books', {
        layout: "book",
        permalink: ":section/:slug",
        isPost: false
      }],
      ['projects', {
        permalink: ":section/:slug",
        isPost: false
      }]
    ]
  },
  css: [
    { src: '~assets/sass/global.sass', lang: 'sass' }
  ],
  loading: { color: '#3B8070' }
}
