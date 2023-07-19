
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },


  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        googleFonts: {
          families: {
            'Public+Sans': true,
          },
        },
      },
    ],
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
})
