<script setup lang="ts">
import { reactiveOmit, reactivePick, useToggle } from '@vueuse/core'
import { NCard, NDrawer, NFlex } from 'naive-ui'
import type { NpDrawerProps } from '../types/props'
import type { NpDrawerSlots } from '../types/slots'
import Icon from '../../_components/Icon.vue'

const props = withDefaults(defineProps<NpDrawerProps>(), {
  closable: true,
  fullscreenable: true,
})
defineSlots<NpDrawerSlots>()
const show = defineModel<boolean>('show')
const drawerProps = reactiveOmit(props, 'show', 'closable', 'fullscreenable', 'title')
const cardProps = reactivePick(props, 'title')
const [fullscreen, toggleFullscreen] = useToggle()
</script>

<template>
  <NDrawer
    v-bind="drawerProps"
    v-model:show="show"
  >
    <NCard
      :bordered="false"
      v-bind="cardProps"
    >
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
  </NDrawer>
</template>
