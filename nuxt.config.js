require('dotenv').config()
const config = require('./.contentful.json')

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
    '@/assets/scss/main.scss'
  ],

  modules: [
    'nuxt-sass-resources-loader',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
  ],

  sassResources: [
    '@/assets/scss/main.scss',
    '@/assets/scss/_base.scss',
    '@/assets/scss/_header.scss',    
    '@/assets/scss/_index-vue.scss'
    
  ],

  plugins: [ 
    {src: '~/plugins/axios.js'},
    {src: '~/plugins/contentful.js'},  //????
    {src: '~/plugins/headroom.js'},
    {src: '~/plugins/jump.js', ssr: false},
    {src: '~/plugins/vue-scrollto.js'} 
  ],

  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN
  },

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