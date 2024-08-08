<script setup lang="ts">
import { NCard } from 'naive-ui'
import ConfigProvider from './ConfigProvider.vue'
</script>

<template>
  <ConfigProvider>
    <NCard :theme-overrides="{ borderRadius: '8px' }">
      <slot />
    </NCard>
  </ConfigProvider>
</template>
