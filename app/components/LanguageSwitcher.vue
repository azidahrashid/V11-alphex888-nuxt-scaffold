<script setup lang="ts">
const languages = [
  { code: 'ko', label: 'KO', flag: 'https://builder.spring-builder.prod.yospace.ai/assets/images/flags64/ko-kr.svg?v=1770109155' },
  { code: 'en', label: 'EN', flag: 'https://builder.spring-builder.prod.yospace.ai/assets/images/flags64/en.svg?v=1770109155' },
  { code: 'zh', label: 'ZH', flag: 'https://builder.spring-builder.prod.yospace.ai/assets/images/flags64/zh-hans-cn.svg?v=1770109155' }
]
const active = ref('ko')
</script>

<template>
  <div class="language-switcher" aria-label="Language switcher placeholder">
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
