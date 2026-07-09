export default defineNuxtConfig({
  ssr: true,
  srcDir: 'app/',
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],
  css: ['~/assets/css/extracted.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'ko' },
      title: 'ALPHABET / Nuxt Scaffold',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Development scaffold migrated from alphex888.com front-end structure. Backend/session logic is stubbed.' },
        { name: 'robots', content: 'noindex,nofollow' }
      ]
    }
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
      'Noto Sans KR': [400, 500, 700, 900]
    },
    display: 'swap'
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.alphex888.com',
      remoteAssets: process.env.NUXT_PUBLIC_REMOTE_ASSETS !== 'false',
      enableAuthStub: process.env.NUXT_PUBLIC_ENABLE_AUTH_STUB !== 'false'
    }
  },
  nitro: {
    preset: process.env.NUXT_NITRO_PRESET || undefined
  }
})
