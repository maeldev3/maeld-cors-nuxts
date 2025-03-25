export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  // ssr:false,
  routeRules: {
    // '/api/**': { proxy: "https://api.staging.voomgle.com/**" }
    // '/api/**': { cors: true }
  }

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
  
})
