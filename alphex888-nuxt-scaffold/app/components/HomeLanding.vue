<script setup lang="ts">
import { heroCards } from '~/data/site'

const { openAuth } = useAuthModal()
</script>

<template>
  <section class="home-landing" aria-labelledby="home-title">
    <div class="landing-glow landing-glow-left" />
    <div class="landing-glow landing-glow-right" />

    <div class="landing-brand-block">
      <p class="section-kicker">ALPHABET</p>
      <h1 id="home-title">알파벳</h1>
      <span>Premium dark-gold frontend recreation</span>
    </div>

    <div class="hero-card-row" aria-label="Main homepage sections">
      <GameCard
        v-for="(card, index) in heroCards"
        :key="card.eyebrow"
        :card="card"
        :index="index"
        @play="openAuth('login')"
      />
    </div>

    <div class="landing-dots" aria-hidden="true">
      <span v-for="card in heroCards" :key="card.eyebrow" />
    </div>
  </section>
</template>
