require('dotenv').config()

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Vue Template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    
  },

  css: [
    '@assets/scss/main.scss'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
  ],

  // axios: {
  //   // proxyHeaders: false
  //   }
  // },

  plugins: [ 
    {src: '~/plugins/axios.js'},
    {src: '~/plugins/headroom.js'},
    {src: '~/plugins/jump.js', ssr: false},
    {src: '~/plugins/vue-scrollto.js'} 
  ],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}