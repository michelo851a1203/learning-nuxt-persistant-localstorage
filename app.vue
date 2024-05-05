<script setup lang="ts">
  const currentAuthStore = authStore();
  const { auth } = storeToRefs(currentAuthStore);
  const { setRandomAuth } = currentAuthStore

</script>

<template>
  <button @click="setRandomAuth">click</button>
  <ClientOnly>
    <div>{{ auth }}</div>
  </ClientOnly>
</template>
