<script setup lang="ts">
import { featureAssets, miniGames } from '~/data/site'
</script>

<template>
  <section class="feature-preview" aria-labelledby="feature-heading">
    <div class="feature-stage">
      <img class="curtain" :src="featureAssets.curtain" alt="Mini game curtain" loading="lazy">
      <img class="spotlight" :src="featureAssets.spotlight" alt="Spotlight" loading="lazy">
      <div class="stage-copy">
        <p class="section-kicker">MINI GAMES</p>
        <h2 id="feature-heading">가볍고 심플한 게임 플레이</h2>
      </div>
      <img class="podium" :src="featureAssets.podium" alt="Game podium" loading="lazy">
      <div class="mini-game-strip">
        <article v-for="game in miniGames" :key="game.title" class="mini-game-card">
          <img :src="game.image" :alt="game.title" loading="lazy">
          <h3>{{ game.title }}</h3>
          <button type="button" class="card-link">PLAY NOW</button>
        </article>
      </div>
    </div>
  </section>
</template>
