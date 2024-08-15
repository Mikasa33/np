<script setup lang="ts">
import { ref } from 'vue'
import { NButton } from 'naive-ui'
import { NpDrawer } from '..'

const show = ref(false)
const drawerProps = {
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
