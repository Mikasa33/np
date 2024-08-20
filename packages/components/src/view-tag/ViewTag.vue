<script setup lang="ts">
import { computed } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import type { SelectOption } from 'naive-ui'
import { NTag } from 'naive-ui'
import { viewTagProps } from './props'
import type { ViewTagSlots } from './types'

const props = defineProps(viewTagProps)
defineSlots<ViewTagSlots>()

const tagProps = reactiveOmit(props, 'options', 'value')

const view = computed(() => {
  if (props.options?.length) {
    return props.options.find((option: SelectOption) => option.value === props.value)?.label || ''
  }
  return props.value
})
</script>

<template>
  <NTag v-bind="tagProps">
    {{ view }}
  </NTag>
</template>
