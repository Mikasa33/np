<script setup lang="ts">
import { NButton } from 'naive-ui'
</script>

<template>
  <NButton
    quaternary
    class="!h-24px !w-24px !p-0"
  >
    <slot />
  </NButton>
</template>
