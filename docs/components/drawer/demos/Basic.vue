<script setup lang="ts">
import type { DrawerProps } from '@mikasa33/np'
import { NpDrawer } from '@mikasa33/np'
import { NButton } from 'naive-ui'
import { ref } from 'vue'

const show = ref(false)
const drawerProps: DrawerProps = {
  title: '标题信息',
}
</script>

<template>
  <NButton @click="show = true">
    打开抽屉
  </NButton>
  <NpDrawer
    v-bind="drawerProps"
    v-model:show="show"
  >
    123
  </NpDrawer>
</template>
