export default defineNuxtConfig({
    ssr: false,
    css: [
        "~/assets/css/main.css", // Add your global styles here
    ],

    app: {
        head: {
          link: [
            {
              rel: 'stylesheet',
              href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap',
            },
          ],
        },
      },

    modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "tailwindcss", "@nuxt/icon"],

    compatibilityDate: "2025-01-06",

    imports: {
        autoImport: true,
    }
})