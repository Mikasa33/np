<script setup lang="ts">
import type { CardProps, ModalProps } from 'naive-ui'
import { NCard, NFlex, NModal, cardProps as nCardProps, modalProps as nModalProps } from 'naive-ui'
import { omit } from 'lodash-es'
import Icon from '../components/Icon.vue'
import { addUnit, pickProps } from '../utils'
import type { ModalSlots } from './types'
import { modalProps } from './props'

defineOptions({
  name: 'NpModal',
})

const props = defineProps(modalProps)
defineSlots<ModalSlots>()

const show = defineModel<boolean>('show')
const fullscreen = defineModel<boolean>('fullscreen')

const pickedModalProps = pickProps<ModalProps>(props, nModalProps)
const cardProps = pickProps<CardProps>(props, omit(nCardProps, 'closable'))
</script>

<template>
  <NModal
    v-bind="pickedModalProps"
    v-model:show="show"
    :style="{ width: addUnit(width) }"
  >
    <NCard v-bind="cardProps">
      <template #header-extra>
        <slot name="header-extra" />
        <NFlex
          align="center"
          justify="end"
          size="small"
        >
          <Icon v-if="fullscreenable">
            <div
              :class="fullscreen ? 'i-icon-park-outline-off-screen' : 'i-icon-park-outline-full-screen'"
              class="text-16px"
            />
          </Icon>
          <Icon v-if="closable">
            <div class="i-icon-park-outline-close text-16px" />
          </Icon>
        </NFlex>
      </template>
      <slot />
    </NCard>
  </NModal>
</template>
