<script setup lang="ts">
import type { NavItem } from '~/data/site'

defineProps<{
  items: NavItem[]
}>()

const emit = defineEmits<{
  navigate: []
}>()
</script>

<template>
  <nav class="navigation-menu" aria-label="Primary navigation">
    <NuxtLink
      v-for="item in items"
      :key="item.href"
      class="nav-link"
      :to="item.href"
      @click="emit('navigate')"
    >
      {{ item.label }}
    </NuxtLink>
  </nav>
</template>
