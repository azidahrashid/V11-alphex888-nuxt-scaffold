export type NavItem = {
  label: string
  href: string
  kind?: 'internal' | 'external' | 'stub'
}

export type GameCard = {
  eyebrow: string
  title: string
  subtitle: string
  description?: string
  href: string
  image: string
  cta: string
}

export const assetBase = 'https://builder.spring-builder.prod.yospace.ai/fs/userFiles-v2/alphabet-18753930/images'
export const siteAssetBase = 'https://www.alphex888.com/fs/userFiles-v2/alphabet-18753930/images'

export const navItems: NavItem[] = [
  { label: '라이브스포츠', href: '/live' },
  { label: '라이브카지노', href: '/live-casino' },
  { label: '미니게임', href: '/mini-games' },
  { label: '자주하는 질문', href: '/faqs' },
  { label: '쿠폰 및 보너스 이용', href: '/coupon-bonus' },
  { label: '스포츠', href: '/pre-match' },
  { label: '슬롯머신', href: '/slot-games' },
  { label: '이벤트', href: '/promotions' },
  { label: '가상 스포츠', href: '/virtual-sports' },
  { label: '스포츠 베팅규정', href: '/sports-betting-rules' }
]

export const heroCards: GameCard[] = [
  {
    eyebrow: 'LIVE SPORTS',
    title: '라이브 스포츠의 미래',
    subtitle: '본질적인 가치에 집중합니다.',
    href: '/live',
    image: `${assetBase}/5262-mobilelivesports.png?v=1678355432`,
    cta: 'PLAY NOW'
  },
  {
    eyebrow: 'LIVE CASINO',
    title: '프리미엄 프라이빗 클럽',
    subtitle: '라이브 카지노를 경험하는 가장 완벽한 공간으로 당신을 초대합니다.',
    href: '/live-casino',
    image: `${assetBase}/5262-mobilelivecasino.png?v=1678355432`,
    cta: 'PLAY NOW'
  },
  {
    eyebrow: 'MINI GAMES',
    title: '가볍고 심플한 게임 플레이',
    subtitle: '가장 트렌디한 경험을 선사합니다.',
    href: '/mini-games',
    image: `${assetBase}/5262-mobileminigames.png?v=1678355432`,
    cta: 'PLAY NOW'
  },
  {
    eyebrow: 'SLOT GAMES',
    title: '잭팟을 향한 위대한 여정',
    subtitle: '진정한 슬롯 매니아를 위해 특별한 경험을 제공합니다.',
    href: '/slot-games',
    image: `${assetBase}/5262-mobileslots.png?v=1678355432`,
    cta: 'PLAY NOW'
  },
  {
    eyebrow: 'PROMOTIONS',
    title: '이벤트',
    subtitle: '알파벳 특권과 프리미엄 혜택',
    href: '/promotions',
    image: `${assetBase}/5262-mobilepromos.png?v=1678355432`,
    cta: '주요 혜택 보기'
  }
]

export const miniGames = [
  {
    title: '파워볼',
    image: `${siteAssetBase}/9382-podiumiconmini.png?v=1678871484`
  },
  {
    title: '매직휠',
    image: `${siteAssetBase}/9382-magicwheel.png?v=1678871484`
  },
  {
    title: 'x50 휠',
    image: `${siteAssetBase}/9382-podiumiconx50wheels.png?v=1678871484`
  },
  {
    title: '페널티킥',
    image: `${siteAssetBase}/9382-podiumiconpenalty.png?v=1678871484`
  },
  {
    title: '블라스트',
    image: `${siteAssetBase}/9382-podiumiconblast.png?v=1678871484`
  }
]

export const featureAssets = {
  casinoHero: `${siteAssetBase}/11827-casino-hero-m.webp`,
  slotHero: `${siteAssetBase}/0187351240278948-frame-29-16774930960998.webp`,
  promotionBox: `${siteAssetBase}/036476149022-promotion-box.webp`,
  curtain: `${siteAssetBase}/9379-curtain.png?v=1678871232`,
  spotlight: `${siteAssetBase}/9381-spotlight.png?v=1678871392`,
  podium: `${siteAssetBase}/5465-mobilepodium.png?v=1678355432`,
  couponGuide: `${siteAssetBase}/8788-alphabet-landing-page-demo02-16762774198298.webp`
}

export const footerNotice = 'Alphabet is owned and operated by ABC Solutions N.V., a company registered in accordance with Curaçao Law, registration No. 156808, Address: Abraham de Veerstraat 9, Curacao. ABC Solutions N.V. is licensed and regulated by the Curacao Gaming Authority and operates under the License No. 365/JAZ issued to Gaming Service Provider, Authorized and Regulated by the Goverment of Curaçao.'
