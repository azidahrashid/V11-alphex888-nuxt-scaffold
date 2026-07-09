<script setup lang="ts">
import type { GameCard } from '~/data/site'

defineProps<{
  card: GameCard
  index?: number
}>()

const emit = defineEmits<{
  play: []
}>()

const assetUrl = useAssetUrl()
</script>

<template>
  <article class="game-card" :style="{ '--delay': `${(index || 0) * 70}ms` }">
    <NuxtLink class="game-card-media" :to="card.href" :aria-label="`${card.eyebrow} page`">
      <img :src="assetUrl(card.image)" :alt="card.eyebrow" loading="eager">
    </NuxtLink>

    <div class="game-card-shine" aria-hidden="true" />

    <div class="game-card-content">
      <p>{{ card.eyebrow }}</p>
      <h2>{{ card.title }}</h2>
      <h3>{{ card.subtitle }}</h3>
      <div class="card-action-row">
        <button type="button" class="card-link primary" @click="emit('play')">{{ card.cta }}</button>
        <NuxtLink class="card-link secondary" :to="card.href">DETAIL</NuxtLink>
      </div>
    </div>
  </article>
</template>
