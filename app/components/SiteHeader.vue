<script setup lang="ts">
import { navItems } from '~/data/site'

const mobileOpen = ref(false)
</script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <NuxtLink class="brand" to="/" aria-label="ALPHABET home">
        <span class="brand-mark">A</span>
        <span class="brand-copy">
          <strong>ALPHABET</strong>
          <small>premium club scaffold</small>
        </span>
      </NuxtLink>

      <NavigationMenu class="desktop-nav" :items="navItems" />

      <div class="header-actions">
        <LanguageSwitcher />
        <AuthPanel />
        <button class="menu-toggle" type="button" :aria-expanded="mobileOpen" @click="mobileOpen = !mobileOpen">
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>

    <Transition name="fade-slide">
      <NavigationMenu v-if="mobileOpen" class="mobile-nav" :items="navItems" @navigate="mobileOpen = false" />
    </Transition>
  </header>
</template>
