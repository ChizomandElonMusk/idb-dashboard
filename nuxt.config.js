export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'IE Grid Intelligence',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1',
        content: "viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"  },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500;600;700&display=swap' }
    ],
    script: [
      // {
      //     type: 'module',
      //     src: 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js'
      // }
      {
        hid: 'theme-init',
        innerHTML: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
        type: 'text/javascript',
        body: false
      }
    ],
    // Nuxt HTML-escapes inline script bodies by default, which turns the quotes above into
    // entities and breaks the script — opt this one out so the theme applies before paint.
    __dangerouslyDisableSanitizersByTagID: { 'theme-init': ['innerHTML'] }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'leaflet/dist/leaflet.css',
    '~/assets/css/grid.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/materialize.js', mode: 'client' },
    '~/plugins/theme.js',
  ],

  generate: {
    dir: 'dist'
  },

  // Exposed to the client bundle at build time (target: 'static' means the
  // dashboard fetches live data in the browser at runtime, not at generate time)
  env: {
    CONTROL_CENTER_API_BASE_URL: process.env.CONTROL_CENTER_API_BASE_URL || 'http://10.50.32.108:8090/api/v1'
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@mrmikkou/custom-select',
  ],

  capacitor: {
    icon: 'assets/icon.png',
    splash: 'assets/splash.png',
  },  

  axios: {
    // baseURL: process.env.API_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-chartjs', 'vue-speedometer'],
    babel: {
      plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    }
  }
}
