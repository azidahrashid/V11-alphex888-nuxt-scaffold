<script setup lang="ts">
const languages = [
  { code: 'ko', label: 'KO', flag: '/assets/alphex/flag-ko.svg' },
  { code: 'en', label: 'EN', flag: '/assets/alphex/flag-en.svg' },
  { code: 'zh', label: 'ZH', flag: '/assets/alphex/flag-zh.svg' }
]
const active = ref('ko')
</script>

<template>
  <div class="language-switcher" aria-label="Language switcher demo">
    <button
      v-for="language in languages"
      :key="language.code"
      type="button"
      class="language-button"
      :class="{ active: active === language.code }"
      @click="active = language.code"
    >
      <img :src="language.flag" :alt="language.label" loading="lazy">
      <span>{{ language.label }}</span>
    </button>
  </div>
</template>
