<script setup lang="ts">
import { NpConfigProvider } from '@mikasa33/np'
import type { GlobalTheme } from 'naive-ui'
import { ref } from 'vue'
import { NButton, NCard, NFlex, darkTheme } from 'naive-ui'

const theme = ref<GlobalTheme | null>(null)
</script>

<template>
  <!-- 设置 global-style 是为了解决在文档中的报错问题，平时可以正常使用 -->
  <NpConfigProvider :global-style="false" :theme>
    <NCard>
      <NFlex>
        <NButton @click="theme = darkTheme">
          深色
        </NButton>
        <NButton @click="theme = null">
          浅色
        </NButton>
      </NFlex>
    </NCard>
  </NpConfigProvider>
</template>
