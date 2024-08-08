<script setup lang="ts">
import type { SelectOption } from 'naive-ui'
import { NTag } from 'naive-ui'
import { computed } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import type { NpViewTagProps } from '../types/props'

const props = withDefaults(defineProps<NpViewTagProps>(), {
  /**
   * 是否有边框，默认 true
   */
  bordered: true,
  /**
   * 尺寸，默认 medium
   */
  size: 'medium',
  /**
   * 类型，默认 default
   */
  type: 'default',
})
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
