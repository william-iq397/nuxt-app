export default defineNuxtConfig({
    ssr: false,
    css: [
        "~/assets/css/main.css", // Add your global styles here
    ],

    modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "tailwindcss", "@nuxt/icon"],

    compatibilityDate: "2025-01-06",

    imports: {
        autoImport: true,
    }
})