module.exports = {
  head: {
    title: 'Nuxt CMS Starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal Site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [
    '~/plugins/vuetify.js'
  ],
  modules: [
    'nuxtent',
    ['@nuxtjs/google-analytics', { ua: 'UA-80644113-1' }]
  ],
  css: [
    '~/assets/style/app.styl',
    '~/assets/style/font.styl',
    '~/assets/css/main.css'
  ],
  loading: { color: '#FFD73C' },
  build: {
    vendor: [
      '~/plugins/vuetify.js'
    ],
    extractCSS: true,
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
}
