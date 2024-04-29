// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},

    css: [
        '~/assets/scss/bundle.scss',
        '~/assets/scss/vendors.scss',
        '~/assets/scss/default.scss',
    ],
})
