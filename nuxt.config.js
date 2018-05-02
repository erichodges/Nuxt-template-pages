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

  // nuxt-sass-resources-loader below is not working as configured, but I'm getting the scss files loaded into main.scss from the css entry above.

    // modules: [
    //         ['nuxt-sass-resources-loader', [
    //             resolve(__dirname, 'assets/scss/file/_index-vue.scss'),
    //             resolve(__dirname, 'assets/scss/file/_base.scss')
    //         ]]
    //     ],


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