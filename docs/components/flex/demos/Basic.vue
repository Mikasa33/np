<script setup lang="ts">
import { NpFlex1 } from '@mikasa33/np'
import { NButton, NFlex } from 'naive-ui'
</script>

<template>
  <NFlex>
    <NButton>按钮1</NButton>
    <NpFlex1 class="bg-#eff0f3 dark:bg-#282a2f" />
    <NButton>按钮2</NButton>
  </NFlex>
</template>
