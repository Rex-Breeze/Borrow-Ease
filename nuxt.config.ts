
// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   devtools: { enabled: true },


//   modules: [
//     [
//       '@nuxtjs/google-fonts',
//       {
//         googleFonts: {
//           families: {
//             'Public+Sans': true,
//           },
//         },
//       },
//     ],
//     '@nuxtjs/tailwindcss',
//     'nuxt-icon'
//   ],
// })



// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Public Sans": true,
        },
      },
    ],
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@element-plus/nuxt",
  ],

  css: ["@/assets/css/main.scss"],
});
