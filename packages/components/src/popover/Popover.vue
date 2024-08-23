<script setup lang="ts">
import type { CardProps, PopoverProps } from 'naive-ui'
import { NPopover, cardProps as nCardProps, popoverProps as nPopoverProps } from 'naive-ui'
import { omit } from 'lodash-es'
import { pickProps } from '../utils'
import { NpPopupCard } from '../popup-card'
import type { PopoverSlots } from './types'
import { popoverProps } from './props'

defineOptions({
  name: 'NpPopover',
})

const props = defineProps(popoverProps)
const emits = defineEmits<{
  confirm: []
}>()
defineSlots<PopoverSlots>()

const show = defineModel<boolean>('show')
const fullscreen = defineModel<boolean>('fullscreen')

const pickedPopoverProps = pickProps<PopoverProps>(props, nPopoverProps)
const pickedCardProps = pickProps<CardProps>(props, omit(nCardProps, 'closable'))

function handleCancel() {
  show.value = false
}

function handleConfirm() {
  emits('confirm')
}
</script>

<template>
  <NPopover
    v-bind="pickedPopoverProps"
    v-model:show="show"
    class="!p-0"
  >
    <NpPopupCard
      v-bind="pickedCardProps"
      v-model:fullscreen="fullscreen"
      :fullscreenable="false"
      @cancel="handleCancel"
      @confirm="handleConfirm"
    >
      <slot name="header-extra" />
      <slot />
    </NpPopupCard>

    <template #trigger>
      <slot name="trigger" />
    </template>
  </NPopover>
</template>
