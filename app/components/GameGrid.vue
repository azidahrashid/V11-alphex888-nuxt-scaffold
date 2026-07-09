<script setup lang="ts">
import { navItems } from '~/data/site'

const { openAuth } = useAuthModal()
const categories = navItems.filter(item => item.href !== '/sports-betting-rules')
</script>

<template>
  <section class="category-section" aria-labelledby="category-heading">
    <div class="section-heading compact">
      <p class="section-kicker">CATEGORY MENU</p>
      <h2 id="category-heading">메뉴 바로가기</h2>
      <span>Original menu labels are mapped to Nuxt routes so each click opens a valid page layout.</span>
    </div>

    <div class="category-grid">
      <article v-for="item in categories" :key="item.href" class="category-card">
        <NuxtLink :to="item.href" class="category-main-link">
          <small>{{ item.english }}</small>
          <strong>{{ item.label }}</strong>
          <span>{{ item.description }}</span>
        </NuxtLink>
        <button type="button" @click="openAuth('login')">PLAY</button>
      </article>
    </div>
  </section>
</template>
