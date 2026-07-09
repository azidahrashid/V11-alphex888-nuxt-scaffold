<script setup lang="ts">
import { heroCards } from '~/data/site'
</script>

<template>
  <section id="games" class="game-grid-section" aria-labelledby="games-heading">
    <div class="section-heading">
      <p class="section-kicker">Captured homepage sections</p>
      <h2 id="games-heading">Main content blocks</h2>
      <span>The homepage was split into reusable card components instead of a raw HTML copy.</span>
    </div>

    <div class="game-grid">
      <GameCard v-for="(card, index) in heroCards" :key="card.eyebrow" :card="card" :index="index" />
    </div>
  </section>
</template>
