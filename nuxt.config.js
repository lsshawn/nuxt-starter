module.exports = {
  head: {
    title: 'Sshawn | A digital nomad who build chatbot for companies. Polygot. Minimalist.',
    meta: [
      { charset: 'utf-8' },
      { meta: 'keyword', content: 'digital nomad, chatbot, programmer, freelancer, polygot' },
      { meta: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A digital nomad who build chatbot for companies. Polygot. Minimalist.' },
      // chrome, firefox, opera
      { name: 'theme-color', content: '#FFD73C' },
      // windows
      { name: 'msapplication-navbutton-color', content: '#FFD73C' },
      // iOS Safari
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: '#FFD73C' },
      // Twitter Card data
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@sshawn' },
      { name: 'twitter:title', content: 'Sshawn' },
      { name: 'twitter:description', content: 'A digital nomad who build chatbot for companies. Polygot. Minimalist.' },
      { name: 'twitter:creator', content: '@sshawn' },
      // Twitter Summary card images must be at least 120x120px
      { name: 'twitter:image', content: '' },
      // Facebook
      { property: 'og:title', content: 'Sshawn' },
      { property: 'og:type', content: 'A digital nomad who build chatbot for companies. Polygot. Minimalist.' },
      { property: 'og:url', content: 'https://sshawn.com/' },
      { property: 'og:image', content: '' },
      { property: 'og:description', content: 'A digital nomad who build chatbot for companies. Polygot. Minimalist.' },
      { property: 'og:site_name', content: 'Sshawn' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: [
    '~/plugins/vuetify.js',
     { src: '~plugins/filters.js' }
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
