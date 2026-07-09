<script setup lang="ts">
import { heroCards } from '~/data/site'

const { openAuth } = useAuthModal()
const assetUrl = useAssetUrl()

function playDemo() {
  openAuth('login')
}
</script>

<template>
  <section class="home-original" aria-labelledby="home-title">
    <h1 id="home-title" class="sr-only">ALPHABET</h1>

    <article
      v-for="(card, index) in heroCards"
      :id="`section-${index + 1}`"
      :key="card.eyebrow"
      class="original-panel"
      :class="[`panel-${index + 1}`, { reversed: index % 2 === 1 }]"
    >
      <div class="original-panel-bg" aria-hidden="true" />
      <div class="original-panel-inner">
        <div class="panel-visual-wrap">
          <img class="panel-visual" :src="assetUrl(card.image)" :alt="card.eyebrow" loading="eager">
        </div>

        <div class="panel-copy">
          <p class="panel-eyebrow">{{ card.eyebrow }}</p>
          <h2>{{ card.title }}</h2>
          <h3>{{ card.subtitle }}</h3>
          <button type="button" class="play-now" @click="playDemo">{{ card.cta }}</button>
        </div>
      </div>
    </article>

    <div class="landing-dots" aria-hidden="true">
      <a v-for="(card, index) in heroCards" :key="card.eyebrow" :href="`#section-${index + 1}`">
        <span />
      </a>
    </div>
  </section>
</template>
