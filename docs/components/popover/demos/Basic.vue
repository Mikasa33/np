<script setup lang="ts">
import type { PopoverProps } from '@mikasa33/np'
import { NpPopover } from '@mikasa33/np'
import { NButton } from 'naive-ui'

const popoverProps: PopoverProps = {
  title: '标题信息',
  width: 500,
}
</script>

<template>
  <NpPopover v-bind="popoverProps">
    <template #trigger>
      <NButton>
        悬浮
      </NButton>
    </template>
    内容
  </NpPopover>
</template>
