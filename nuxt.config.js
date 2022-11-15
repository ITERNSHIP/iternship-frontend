require('dotenv').config()
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ITERNSHIP',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
  {
    rel : 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
  }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    './plugins/vuevalidate.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // ["@nuxtjs/dotenv", { filename: ".env.dev" }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    "vue-sweetalert2/nuxt",
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
  ],
  
  // auth: {
  //   redirect: {
  //     login: "/login",
  //     logout: "/login",
  //     callback: "/login",
  //     home: false,
  //   },
  //   strategies: {
  //     cookie: { 
  //       cookie:{
  //         name: "XSRF-TOKEN"
  //       },
  //       token: {
  //         property: "data.access_token",
  //         required: true,
  //         type: "Bearer",
  //       },
  //       user: {
  //         property: "data",
  //       },
  //       endpoints: {
  //         login: {
  //           url: "/users/login",
  //           method: "post",
  //         },
  //         logout: { url: "/users/logout", method: "delete" },
  //         user: { url: "/v1/settings", method: "get" },
  //       },
  //     },
  //   },
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL || 'http://localhost:8081'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  publicRuntimeConfig: {
    // baseURL: process.env.BASE_URL,
    axios: {
      BaseURL: process.env.BASE_URL
    }
  },

  ssr: false,
  mode: 'spa',
}
