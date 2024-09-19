<script setup lang="ts">
import type { CardProps, ModalProps } from 'naive-ui'
import type { ModalSlots } from './types'
import { omit } from 'lodash-es'
import { cardProps as nCardProps, NModal, modalProps as nModalProps } from 'naive-ui'
import { NpPopupCard } from '../popup-card'
import { addUnit, pickProps } from '../utils'
import { modalProps } from './props'

defineOptions({
  name: 'NpModal',
})

const props = defineProps(modalProps)
const emits = defineEmits<{
  confirm: []
}>()
const slots = defineSlots<ModalSlots>()

const show = defineModel<boolean>('show')

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
    :style="{ width: addUnit(props.width) }"
  >
    <NpPopupCard
      v-bind="pickedCardProps"
      @cancel="handleCancel"
      @confirm="handleConfirm"
    >
      <template
        v-if="slots['header-extra']"
        #header-extra
      >
        <slot name="header-extra" />
      </template>

      <slot />

      <template
        v-if="slots.footer"
        #footer
      >
        <slot name="footer" />
      </template>
    </NpPopupCard>
  </NModal>
</template>
