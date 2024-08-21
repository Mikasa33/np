<script setup lang="ts">
import { ref } from 'vue'
import { NButton } from 'naive-ui'
import type { ModalProps } from '@mikasa33/np'
import { NpModal } from '@mikasa33/np'

const show = ref(false)
const modalProps: ModalProps = {
  title: '标题信息',
}
</script>

<template>
  <NButton @click="show = true">
    打开模态窗
  </NButton>
  <NpModal
    v-bind="modalProps"
    v-model:show="show"
  >
    123
  </NpModal>
</template>
