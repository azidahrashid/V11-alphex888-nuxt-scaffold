<script setup lang="ts">
import { featureAssets, navItems } from '~/data/site'

const route = useRoute()
const slug = computed(() => route.params.slug ? `/${Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug}` : '/')
const navItem = computed(() => navItems.find(item => item.href === slug.value))

const pagePresets: Record<string, { kicker: string; title: string; copy: string; image?: string }> = {
  '/live': {
    kicker: 'LIVE SPORTS',
    title: '라이브 스포츠',
    copy: 'Sports runtime area placeholder. Connect only authorised sports feed and betting service during development.'
  },
  '/pre-match': {
    kicker: 'SPORTS',
    title: '스포츠',
    copy: 'Pre-match sports shell. Private odds, wallet, ticket and session logic are intentionally omitted.'
  },
  '/live-casino': {
    kicker: 'LIVE CASINO',
    title: '프리미엄 프라이빗 클럽',
    copy: '라이브 카지노를 경험하는 가장 완벽한 공간으로 당신을 초대합니다.',
    image: featureAssets.casinoHero
  },
  '/mini-games': {
    kicker: 'MINI GAMES',
    title: '가볍고 심플한 게임 플레이',
    copy: 'Mini games section stub, ready for authorised game providers or mock data.',
    image: featureAssets.podium
  },
  '/slot-games': {
    kicker: 'SLOT GAMES',
    title: '잭팟을 향한 위대한 여정',
    copy: '진정한 슬롯 매니아를 위해 특별한 경험을 제공합니다.',
    image: featureAssets.slotHero
  },
  '/promotions': {
    kicker: 'PROMOTIONS',
    title: '이벤트',
    copy: '알파벳 특권과 프리미엄 혜택',
    image: featureAssets.promotionBox
  },
  '/coupon-bonus': {
    kicker: 'GUIDE',
    title: '쿠폰 및 보너스 이용',
    copy: 'Static guide placeholder. Replace with owned, reviewed content before production.',
    image: featureAssets.couponGuide
  },
  '/faqs': {
    kicker: 'FAQ',
    title: '자주하는 질문',
    copy: 'FAQ content scaffold. Populate with your approved support copy.'
  },
  '/virtual-sports': {
    kicker: 'VIRTUAL SPORTS',
    title: '가상 스포츠',
    copy: 'Virtual sports placeholder. No private backend game logic has been copied.'
  },
  '/sports-betting-rules': {
    kicker: 'RULES',
    title: '스포츠 베팅규정',
    copy: 'Rules page scaffold. Import reviewed policy copy from your authorised source.'
  }
}

const page = computed(() => pagePresets[slug.value] || {
  kicker: 'SCAFFOLD',
  title: navItem.value?.label || 'Development page',
  copy: 'This route is generated as a safe Nuxt placeholder.'
})

const metaTitle = computed(() => `${page.value.title} / ALPHABET Scaffold`)
const metaDescription = computed(() => page.value.copy)

useSeoMeta({
  title: metaTitle,
  description: metaDescription
})
</script>

<template>
  <section class="subpage-shell">
    <div class="subpage-copy">
      <p class="section-kicker">{{ page.kicker }}</p>
      <h1>{{ page.title }}</h1>
      <p>{{ page.copy }}</p>
      <NuxtLink class="btn btn-gold" to="/">Back to home scaffold</NuxtLink>
    </div>

    <div v-if="page.image" class="subpage-art">
      <img :src="page.image" :alt="page.title" loading="lazy">
    </div>
  </section>
</template>
