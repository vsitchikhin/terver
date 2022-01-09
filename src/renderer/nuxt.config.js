/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */

module.exports = {
  ssr: false,
  target: 'static',
  head: {
    title: 'terver',
    meta: [{ charset: "utf-8" }]
  },
  loading: false,
  plugins: [
    {ssr: true, src: '@/plugins/icons.js'},


  ],
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  modules: [

  ],
          vuetify: {
            theme: {
              themes: {
                dark: {
                  primary: '#1976d2',
                  accent: '#616161',
                  secondary: '#ff8f00',
                  info: '#26a69a',
                  warning: '#ffc107',
                  error: '#dd2c00',
                  success: '#00e676'
                }
              },
            }
          }
};
