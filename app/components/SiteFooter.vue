<script setup lang="ts">
import { footerNotice } from '~/data/site'
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="brand-mark">A</span>
        <div>
          <strong>ALPHABET</strong>
          <p>Nuxt development scaffold</p>
        </div>
      </div>

      <p class="footer-notice">{{ footerNotice }}</p>

      <div class="footer-bottom">
        <span>ALPHABET © 2026. 판권 소유.</span>
        <span>19+</span>
      </div>
    </div>
  </footer>
</template>
