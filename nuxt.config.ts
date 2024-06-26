// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ["@pinia/nuxt", {
      autoImports: [
        'defineStore',
        'storeToRefs',
        'acceptHMRUpdate'
      ]
    }]
  ],
  imports: {
    dirs: ['~/stores/']
  }
})
