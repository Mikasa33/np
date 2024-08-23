<script setup lang="ts">
import type { CardProps } from 'naive-ui'
import { NButton, NCard, NFlex, NScrollbar, cardProps as nCardProps } from 'naive-ui'
import { omit } from 'lodash-es'
import { useFullscreen } from '@vueuse/core'
import { ref } from 'vue'
import { pickProps } from '../utils'
import { popupCardProps } from './props'
import type { PopupCardSlots } from './types'
import PopupCardIconBtn from './PopupCardIconBtn.vue'

defineOptions({
  name: 'NpPopupCard',
})

const props = defineProps(popupCardProps)
const emits = defineEmits<{
  cancel: []
  confirm: []
}>()
const slots = defineSlots<PopupCardSlots>()

const fullscreen = defineModel<boolean>('fullscreen')

const cardProps = pickProps<CardProps>(props, omit(nCardProps, 'closable'))

const cardRef = ref()
const { toggle } = useFullscreen(cardRef)

function handleToggleFullscreen() {
  fullscreen.value = !fullscreen.value
  toggle()
}

function handleCancel() {
  emits('cancel')
}

function handleConfirm() {
  emits('confirm')
}
</script>

<template>
  <NCard
    ref="cardRef"
    v-bind="cardProps"
    :content-class="`${cardProps?.contentClass ?? ''} overflow-hidden !p-0`"
    :class="{
      '!rounded-none': fullscreen,
    }"
    class="h-full"
  >
    <template #header-extra>
      <slot name="header-extra" />
      <NFlex
        align="center"
        justify="end"
        size="small"
      >
        <PopupCardIconBtn
          v-if="fullscreenable"
          @click="handleToggleFullscreen"
        >
          <div
            :class="fullscreen ? 'i-icon-park-outline-off-screen' : 'i-icon-park-outline-full-screen'"
            class="text-16px"
          />
        </PopupCardIconBtn>
        <PopupCardIconBtn
          v-if="closable"
          @click="handleCancel"
        >
          <div class="i-icon-park-outline-close text-16px" />
        </PopupCardIconBtn>
      </NFlex>
    </template>

    <NScrollbar content-class="px-24px pb-20px">
      <slot />
    </NScrollbar>

    <template #footer>
      <slot
        v-if="slots.footer"
        name="footer"
      />
      <NFlex
        v-else
        justify="end"
      >
        <NButton @click="handleCancel">
          取消
        </NButton>
        <NButton
          type="primary"
          @click="handleConfirm"
        >
          确认
        </NButton>
      </NFlex>
    </template>
  </NCard>
</template>
