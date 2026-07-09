<script setup lang="ts">
import type { GameCard } from '~/data/site'

defineProps<{
  card: GameCard
  index?: number
}>()
</script>

<template>
  <article class="game-card" :style="{ '--delay': `${(index || 0) * 80}ms` }">
    <div class="game-card-media">
      <img :src="card.image" :alt="card.eyebrow" loading="lazy">
    </div>
    <div class="game-card-content">
      <p>{{ card.eyebrow }}</p>
      <h2>{{ card.title }}</h2>
      <h3>{{ card.subtitle }}</h3>
      <span v-if="card.description">{{ card.description }}</span>
      <NuxtLink class="card-link" :to="card.href">{{ card.cta }}</NuxtLink>
    </div>
  </article>
</template>
