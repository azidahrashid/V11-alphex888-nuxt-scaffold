<script setup lang="ts">
import { featureAssets, miniGames, navItems } from '~/data/site'

const route = useRoute()
const { openAuth } = useAuthModal()

const slug = computed(() => {
  const raw = route.params.slug
  if (!raw) return '/'
  const parts = Array.isArray(raw) ? raw : [raw]
  return `/${parts.join('/')}`
})

const pagePresets: Record<string, { kicker: string; title: string; copy: string; image?: string; bullets?: string[] }> = {
  '/live': {
    kicker: 'LIVE SPORTS',
    title: '라이브 스포츠',
    copy: '라이브 스포츠의 미래. 본질적인 가치에 집중하는 스포츠 화면 레이아웃입니다.',
    image: featureAssets.sportsHero,
    bullets: ['상단 경기 상태 영역', '카테고리 필터 UI', '프론트엔드 데모 버튼']
  },
  '/pre-match': {
    kicker: 'SPORTS',
    title: '스포츠',
    copy: '스포츠 카테고리용 정적 Nuxt 페이지입니다. 실제 배당, 티켓, 지갑, 정산 로직은 포함하지 않았습니다.',
    image: featureAssets.sportsHero,
    bullets: ['스포츠 메뉴 라우팅', '샘플 리스트 카드', '실제 API 미연결']
  },
  '/live-casino': {
    kicker: 'LIVE CASINO',
    title: '프리미엄 프라이빗 클럽',
    copy: '라이브 카지노를 경험하는 가장 완벽한 공간으로 당신을 초대합니다.',
    image: featureAssets.casinoHero,
    bullets: ['프리미엄 카드 레이아웃', '로그인 모달 연결', '공급사 API 미연결']
  },
  '/mini-games': {
    kicker: 'MINI GAMES',
    title: '가볍고 심플한 게임 플레이',
    copy: '가장 트렌디한 경험을 선사합니다. 이 페이지는 미니게임 카테고리의 프론트엔드 데모입니다.',
    image: featureAssets.podium,
    bullets: miniGames.map(game => game.title)
  },
  '/slot-games': {
    kicker: 'SLOT GAMES',
    title: '잭팟을 향한 위대한 여정',
    copy: '진정한 슬롯 매니아를 위해 특별한 경험을 제공합니다.',
    image: featureAssets.slotHero,
    bullets: ['슬롯 카테고리 UI', '게임 카드 placeholder', '로그인 CTA']
  },
  '/promotions': {
    kicker: 'PROMOTIONS',
    title: '이벤트',
    copy: '알파벳 특권과 프리미엄 혜택을 보여주는 프로모션 페이지 레이아웃입니다.',
    image: featureAssets.promotionBox,
    bullets: ['혜택 카드', '쿠폰 안내 링크', '프론트엔드 상태 표시']
  },
  '/coupon-bonus': {
    kicker: 'GUIDE',
    title: '쿠폰 및 보너스 이용',
    copy: '쿠폰 및 보너스 이용 안내용 정적 페이지입니다. 실제 쿠폰 발급이나 지갑 반영 기능은 없습니다.',
    image: featureAssets.couponGuide,
    bullets: ['쿠폰 안내', '보너스 이용 조건 placeholder', '지원 문의 링크']
  },
  '/faqs': {
    kicker: 'FAQ',
    title: '자주하는 질문',
    copy: '자주하는 질문 페이지 레이아웃입니다. 운영 정책 문구는 프로젝트 소유자가 검토 후 교체해야 합니다.',
    image: featureAssets.couponGuide,
    bullets: ['가입 문의', '쿠폰 문의', '모바일 이용 문의']
  },
  '/virtual-sports': {
    kicker: 'VIRTUAL SPORTS',
    title: '가상 스포츠',
    copy: '가상 스포츠 카테고리용 페이지입니다. 실제 게임 엔진 또는 데이터 피드는 연결되어 있지 않습니다.',
    image: featureAssets.sportsHero,
    bullets: ['가상 스포츠 리스트', '데모 CTA', '정적 배포 가능']
  },
  '/sports-betting-rules': {
    kicker: 'RULES',
    title: '스포츠 베팅규정',
    copy: '스포츠 베팅규정 문서 레이아웃입니다. 실제 운영 규정은 승인된 원문으로 교체하세요.',
    image: featureAssets.couponGuide,
    bullets: ['규정 섹션 placeholder', '정책 문구 교체 필요', '정적 라우트']
  }
}

const miniGamePreset = computed(() => miniGames.find(game => slug.value === game.route))

const page = computed(() => {
  if (miniGamePreset.value) {
    return {
      kicker: 'MINI GAME',
      title: miniGamePreset.value.title,
      copy: `${miniGamePreset.value.title} 상세 화면 placeholder입니다. 실제 게임 실행, 배팅, 지갑 기능은 없습니다.`,
      image: miniGamePreset.value.image,
      bullets: ['프론트엔드 카드', '로그인 모달 연결', '정적 Nuxt route']
    }
  }

  return pagePresets[slug.value] || {
    kicker: 'ALPHABET',
    title: navItems.find(item => item.href === slug.value)?.label || 'Development page',
    copy: 'This Nuxt route is intentionally rendered as a safe static placeholder instead of a broken page.',
    image: featureAssets.couponGuide,
    bullets: ['Valid route shell', 'No backend dependency', 'GitHub Pages compatible']
  }
})

useSeoMeta({
  title: computed(() => `${page.value.title} / ALPHABET`),
  description: computed(() => page.value.copy)
})
</script>

<template>
  <section class="subpage-shell">
    <div class="subpage-copy">
      <p class="section-kicker">{{ page.kicker }}</p>
      <h1>{{ page.title }}</h1>
      <p>{{ page.copy }}</p>

      <ul class="subpage-bullets">
        <li v-for="bullet in page.bullets" :key="bullet">{{ bullet }}</li>
      </ul>

      <div class="subpage-actions">
        <button type="button" class="btn btn-join" @click="openAuth('login')">PLAY NOW</button>
        <NuxtLink class="btn btn-login" to="/">HOME</NuxtLink>
      </div>
    </div>

    <div v-if="page.image" class="subpage-art">
      <img :src="page.image" :alt="page.title" loading="lazy">
    </div>
  </section>
</template>
