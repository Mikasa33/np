<script setup lang="ts">
import type { CardProps, DrawerProps } from 'naive-ui'
import { NCard, NDrawer, NFlex, cardProps as nCardProps, drawerProps as nDrawerProps } from 'naive-ui'
import { omit } from 'lodash-es'
import Icon from '../components/Icon.vue'
import { pickProps } from '../utils'
import type { DrawerSlots } from './types'
import { drawerProps } from './props'

defineOptions({
  name: 'NpDrawer',
})

const props = defineProps(drawerProps)
defineSlots<DrawerSlots>()

const show = defineModel<boolean>('show')
const fullscreen = defineModel<boolean>('fullscreen')

const pickedDrawerProps = pickProps<DrawerProps>(props, nDrawerProps)
const cardProps = pickProps<CardProps>(props, omit(nCardProps, 'closable'))
</script>

<template>
  <NDrawer
    v-bind="pickedDrawerProps"
    v-model:show="show"
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
  </NDrawer>
</template>
