<script setup lang="ts">
const config = useRuntimeConfig()

function showStubNotice(action: string) {
  if (!config.public.enableAuthStub) return
  window.alert(`${action} is intentionally stubbed for development. Connect your own authorised backend/API here.`)
}
</script>

<template>
  <div class="auth-panel" aria-label="Authentication placeholder">
    <button type="button" class="btn btn-ghost" @click="showStubNotice('Login')">LOGIN</button>
    <button type="button" class="btn btn-gold" @click="showStubNotice('Join')">JOIN</button>
  </div>
</template>
