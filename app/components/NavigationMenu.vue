<script setup lang="ts">
import type { NavGroup } from '~/data/site'

defineProps<{
  groups: NavGroup[]
}>()

const emit = defineEmits<{
  navigate: []
}>()
</script>

<template>
  <nav class="navigation-menu" aria-label="Primary navigation">
    <div v-for="group in groups" :key="group.label" class="nav-group">
      <button type="button" class="nav-group-trigger">
        <span>{{ group.label }}</span>
        <span class="chevron" aria-hidden="true">⌄</span>
      </button>

      <div class="nav-dropdown">
        <NuxtLink
          v-for="item in group.items"
          :key="item.href"
          class="nav-link"
          :to="item.href"
          @click="emit('navigate')"
        >
          <span class="nav-label">{{ item.label }}</span>
          <small>{{ item.english }}</small>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
