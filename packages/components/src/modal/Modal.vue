<script setup lang="ts">
import type { CardProps, ModalProps } from 'naive-ui'
import { NModal, cardProps as nCardProps, modalProps as nModalProps } from 'naive-ui'
import { omit } from 'lodash-es'
import { addUnit, pickProps } from '../utils'
import { NpPopupCard } from '../popup-card'
import type { ModalSlots } from './types'
import { modalProps } from './props'

defineOptions({
  name: 'NpModal',
})

const props = defineProps(modalProps)
const emits = defineEmits<{
  confirm: []
}>()
defineSlots<ModalSlots>()

const show = defineModel<boolean>('show')
const fullscreen = defineModel<boolean>('fullscreen')

const pickedModalProps = pickProps<ModalProps>(props, nModalProps)
const pickedCardProps = pickProps<CardProps>(props, omit(nCardProps, 'closable'))

function handleCancel() {
  show.value = false
}

function handleConfirm() {
  emits('confirm')
}
</script>

<template>
  <NModal
    v-bind="pickedModalProps"
    v-model:show="show"
    :style="{ width: addUnit(width) }"
  >
    <NpPopupCard
      v-bind="pickedCardProps"
      v-model:fullscreen="fullscreen"
      @cancel="handleCancel"
      @confirm="handleConfirm"
    >
      <slot name="header-extra" />
      <slot />
    </NpPopupCard>
  </NModal>
</template>
