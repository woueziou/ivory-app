<template>
  <div class="font-light">
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
import { usePrimeVue } from 'primevue/config';
const priveVue = usePrimeVue()
priveVue.config.ripple = true;
</script>