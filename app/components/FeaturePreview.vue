<script setup lang="ts">
import { miniGames } from '~/data/site'

const { openAuth } = useAuthModal()
const assetUrl = useAssetUrl()
</script>

<template>
  <section class="feature-preview" aria-labelledby="feature-heading">
    <div class="feature-stage">
      <div class="stage-copy">
        <p class="section-kicker">MINI GAMES</p>
        <h2 id="feature-heading">가볍고 심플한 게임 플레이</h2>
        <span>Game buttons are frontend-only demo actions. They open the login modal and do not call any provider API.</span>
      </div>

      <img class="podium" :src="assetUrl('/assets/alphex/stage-podium.svg')" alt="Mini game stage" loading="lazy">

      <div class="mini-game-strip">
        <article v-for="game in miniGames" :key="game.title" class="mini-game-card">
          <NuxtLink :to="game.route" class="mini-game-art">
            <img :src="assetUrl(game.image)" :alt="game.title" loading="lazy">
          </NuxtLink>
          <h3>{{ game.title }}</h3>
          <button type="button" class="card-link primary" @click="openAuth('login')">PLAY NOW</button>
        </article>
      </div>
    </div>
  </section>
</template>
