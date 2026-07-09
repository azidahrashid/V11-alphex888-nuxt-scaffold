<script setup lang="ts">
import { navItems } from '~/data/site'

const mobileOpen = ref(false)
const route = useRoute()
const { openAuth } = useAuthModal()
const assetUrl = useAssetUrl()

watch(() => route.fullPath, () => {
  mobileOpen.value = false
})

function openModal(mode: 'login' | 'register') {
  mobileOpen.value = false
  openAuth(mode)
}
</script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <NuxtLink class="brand" to="/" aria-label="ALPHABET home">
        <img class="brand-mark" :src="assetUrl('/assets/alphex/logo-mark.svg')" alt="" aria-hidden="true">
        <span class="brand-copy">
          <strong>ALPHABET</strong>
        </span>
      </NuxtLink>

      <NavigationMenu class="desktop-nav" :items="navItems" />

      <div class="header-actions">
        <LanguageSwitcher />
        <div class="auth-panel desktop-auth">
          <button type="button" class="btn btn-login" @click="openModal('login')">LOGIN</button>
          <button type="button" class="btn btn-join" @click="openModal('register')">JOIN</button>
        </div>
        <button class="menu-toggle" type="button" :aria-expanded="mobileOpen" aria-controls="mobile-navigation" @click="mobileOpen = !mobileOpen">
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>

    <Transition name="mobile-panel">
      <div v-if="mobileOpen" id="mobile-navigation" class="mobile-nav-panel">
        <NavigationMenu class="mobile-nav" :items="navItems" @navigate="mobileOpen = false" />
        <div class="mobile-auth-row">
          <button type="button" class="btn btn-login" @click="openModal('login')">LOGIN</button>
          <button type="button" class="btn btn-join" @click="openModal('register')">JOIN</button>
        </div>
      </div>
    </Transition>
  </header>
</template>
