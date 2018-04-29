export const head = {
  title: 'vue-starter-test',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'Nuxt.js project' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
};
export const css = [
  '@assets/scss/main.scss'
];

export const modules = [
  ['nuxt-sass-resources-loader', [
      resolve(__dirname, 'assets/scss/file/_index-vue.scss'),
      // resolve(__dirname, 'assets/scss/file/_path-two.scss')
  ]]
];

export const loading = { color: '#3B8070' };

export const build = {
  /*
  ** Run ESLint on save
  */
  extend(config, { isDev, isClient }) {
    if (isDev && isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      });
    }
  }
};
