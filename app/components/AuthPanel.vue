<script setup lang="ts">
const { openAuth } = useAuthModal()
</script>

<template>
  <div class="auth-panel" aria-label="Demo authentication actions">
    <button type="button" class="btn btn-login" @click="openAuth('login')">LOGIN</button>
    <button type="button" class="btn btn-join" @click="openAuth('register')">JOIN</button>
  </div>
</template>
