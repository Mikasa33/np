<script setup lang="ts">
import type { CardProps, DrawerProps } from 'naive-ui'
import { NDrawer, cardProps as nCardProps, drawerProps as nDrawerProps } from 'naive-ui'
import { omit } from 'lodash-es'
import { pickProps } from '../utils'
import { NpPopupCard } from '../popup-card'
import type { DrawerSlots } from './types'
import { drawerProps } from './props'

defineOptions({
  name: 'NpDrawer',
})

const props = defineProps(drawerProps)
const emits = defineEmits<{
  confirm: []
}>()
defineSlots<DrawerSlots>()

const show = defineModel<boolean>('show')
const fullscreen = defineModel<boolean>('fullscreen')

const pickedDrawerProps = pickProps<DrawerProps>(props, nDrawerProps)
const pickedCardProps = pickProps<CardProps>(props, omit(nCardProps, 'closable'))

function handleCancel() {
  show.value = false
}

function handleConfirm() {
  emits('confirm')
}
</script>

<template>
  <NDrawer
    v-bind="pickedDrawerProps"
    v-model:show="show"
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
  </NDrawer>
</template>
