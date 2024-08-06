<script setup lang="ts">
import { NCard } from 'naive-ui'
import ConfigProvider from './ConfigProvider.vue'
</script>

<template>
  <ConfigProvider>
    <NCard>
      <slot />
    </NCard>
  </ConfigProvider>
</template>
