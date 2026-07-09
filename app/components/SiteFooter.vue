<script setup lang="ts">
import { footerNotice } from '~/data/site'
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-top">
        <NuxtLink class="footer-brand" to="/">
          <img class="brand-mark" src="/assets/alphex/logo-mark.svg" alt="" aria-hidden="true">
          <div>
            <strong>ALPHABET</strong>
            <p>알파벳 프론트엔드 데모</p>
          </div>
        </NuxtLink>
        <div class="footer-badges">
          <span>19+</span>
          <span>STATIC NUXT</span>
          <span>DEMO AUTH ONLY</span>
        </div>
      </div>

      <p class="footer-notice">{{ footerNotice }}</p>

      <div class="footer-bottom">
        <span>ALPHABET © 2026. 판권 소유.</span>
        <span>No real gambling, wallet, payment, or backend integration is included.</span>
      </div>
    </div>
  </footer>
</template>
