export type NavItem = {
  label: string
  english: string
  href: string
  description: string
}

export type NavGroup = {
  label: string
  items: NavItem[]
}

export type GameCard = {
  eyebrow: string
  title: string
  subtitle: string
  href: string
  image: string
  cta: string
}

export const navItems: NavItem[] = [
  { label: '라이브스포츠', english: 'Live Sports', href: '/live', description: '라이브 스포츠의 미래' },
  { label: '라이브카지노', english: 'Live Casino', href: '/live-casino', description: '프리미엄 프라이빗 클럽' },
  { label: '미니게임', english: 'Mini Games', href: '/mini-games', description: '가볍고 심플한 게임 플레이' },
  { label: '자주하는 질문', english: 'FAQ', href: '/faqs', description: '이용 전 확인할 기본 안내' },
  { label: '쿠폰 및 보너스 이용', english: 'Coupon & Bonus', href: '/coupon-bonus', description: '쿠폰과 보너스 사용 안내' },
  { label: '스포츠', english: 'Sports', href: '/pre-match', description: '스포츠 카테고리 화면' },
  { label: '슬롯머신', english: 'Slot Games', href: '/slot-games', description: '잭팟을 향한 위대한 여정' },
  { label: '이벤트', english: 'Promotions', href: '/promotions', description: '알파벳 특권과 프리미엄 혜택' },
  { label: '가상 스포츠', english: 'Virtual Sports', href: '/virtual-sports', description: '가상 스포츠 카테고리 화면' },
  { label: '스포츠 베팅규정', english: 'Betting Rules', href: '/sports-betting-rules', description: '스포츠 베팅규정 안내' }
]

export const navGroups: NavGroup[] = [
  {
    label: '스포츠',
    items: navItems.filter(item => ['/live', '/pre-match', '/virtual-sports', '/sports-betting-rules'].includes(item.href))
  },
  {
    label: '게임',
    items: navItems.filter(item => ['/live-casino', '/mini-games', '/slot-games'].includes(item.href))
  },
  {
    label: '혜택/지원',
    items: navItems.filter(item => ['/promotions', '/coupon-bonus', '/faqs'].includes(item.href))
  }
]

export const heroCards: GameCard[] = [
  {
    eyebrow: 'LIVE SPORTS',
    title: '라이브 스포츠의 미래',
    subtitle: '본질적인 가치에 집중합니다.',
    href: '/live',
    image: '/assets/alphex/card-live-sports.svg',
    cta: 'PLAY NOW'
  },
  {
    eyebrow: 'LIVE CASINO',
    title: '프리미엄 프라이빗 클럽',
    subtitle: '라이브 카지노를 경험하는 가장 완벽한 공간으로 당신을 초대합니다.',
    href: '/live-casino',
    image: '/assets/alphex/card-live-casino.svg',
    cta: 'PLAY NOW'
  },
  {
    eyebrow: 'MINI GAMES',
    title: '가볍고 심플한 게임 플레이',
    subtitle: '가장 트렌디한 경험을 선사합니다.',
    href: '/mini-games',
    image: '/assets/alphex/card-mini-games.svg',
    cta: 'PLAY NOW'
  },
  {
    eyebrow: 'SLOT GAMES',
    title: '잭팟을 향한 위대한 여정',
    subtitle: '진정한 슬롯 매니아를 위해 특별한 경험을 제공합니다.',
    href: '/slot-games',
    image: '/assets/alphex/card-slot-games.svg',
    cta: 'PLAY NOW'
  },
  {
    eyebrow: 'PROMOTIONS',
    title: '이벤트',
    subtitle: '알파벳 특권과 프리미엄 혜택',
    href: '/promotions',
    image: '/assets/alphex/card-promotions.svg',
    cta: '주요 혜택 보기'
  }
]

export const miniGames = [
  { title: '파워볼', route: '/mini-games/powerball', image: '/assets/alphex/icon-powerball.svg' },
  { title: '매직휠', route: '/mini-games/magic-wheel', image: '/assets/alphex/icon-magic-wheel.svg' },
  { title: 'x50 휠', route: '/mini-games/x50-wheel', image: '/assets/alphex/icon-x50.svg' },
  { title: '페널티킥', route: '/mini-games/penalty-kick', image: '/assets/alphex/icon-penalty.svg' },
  { title: '블라스트', route: '/mini-games/blast', image: '/assets/alphex/icon-blast.svg' }
]

export const featureAssets = {
  casinoHero: '/assets/alphex/page-casino.svg',
  slotHero: '/assets/alphex/page-slots.svg',
  promotionBox: '/assets/alphex/page-promotions.svg',
  podium: '/assets/alphex/stage-podium.svg',
  couponGuide: '/assets/alphex/page-coupon.svg',
  sportsHero: '/assets/alphex/page-sports.svg'
}

export const footerNotice = 'Alphabet is owned and operated by ABC Solutions N.V., a company registered in accordance with Curaçao Law, registration No. 156808, Address: Abraham de Veerstraat 9, Curacao. ABC Solutions N.V. is licensed and regulated by the Curacao Gaming Authority and operates under the License No. 365/JAZ issued to Gaming Service Provider, Authorized and Regulated by the Goverment of Curaçao.'
