export default defineNuxtConfig({
  ssr: true,
  srcDir: 'app/',
  compatibilityDate: '2026-07-10',
  devtools: { enabled: true },
  css: ['~/assets/css/extracted.css'],
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: { lang: 'ko' },
      title: 'ALPHABET / Frontend Recreation',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'description', content: 'Static Nuxt frontend recreation of the public ALPHABET landing page. Demo-only auth interactions.' },
        { name: 'robots', content: 'noindex,nofollow' },
        { name: 'theme-color', content: '#050505' }
      ]
    }
  },
  nitro: {
    preset: process.env.NUXT_NITRO_PRESET || undefined
  }
})
