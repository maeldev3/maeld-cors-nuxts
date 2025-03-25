export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  // ssr:false,
  // routeRules: {
  //   '/api/**': { proxy: "https://api.staging.voomgle.com/**" }
  // },

  // nitro: {
  //   devProxy: {
  //     "/web": {
  //         target: "https://api.staging.voomgle.com/api/",
  //         // Headers: { "Access-Control-Allow-Origin": "*", 'Access-Control-Allow-Headers': '*', },
  //         prependPath: true,
  //         changeOrigin: true,
  //     },
  //   }
  // }


  // vite: {
  //   server: {
  //     proxy: {
  //       '/': {
  //         target: 'https://api.staging.voomgle.com',
  //         changeOrigin: true,
  //       },
  //       '/api': {
  //         target: 'https://api.staging.voomgle.com/api',
  //         changeOrigin: true,
  //         rewrite: (path) => path.replace(/^\/api/, ''),
  //       },
  //     },
  //   },
  // },

  
})
