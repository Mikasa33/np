<script setup lang="ts">
import type { SelectGroupOption, SelectOption } from 'naive-ui'
import { NSelect } from 'naive-ui'
import { reactiveOmit, useToggle } from '@vueuse/core'
import { isArray } from 'lodash-es'
import { ref } from 'vue'
import { selectProps } from './props'
import type { SelectSlots } from './types'

const props = defineProps(selectProps)
defineSlots<SelectSlots>()

const value = defineModel<Array<string | number> | string | number | null>('value')
const loading = defineModel<boolean>('loading', { default: false })
const options = defineModel<Array<SelectOption | SelectGroupOption>>('options', { default: () => [] })

const pickedSelectProps = reactiveOmit(props, 'immediate', 'loading', 'value', 'onRequest')

const requested = ref(false)

function handleUpdateShow(show: boolean) {
  // 显示菜单 && 没有请求
  if (show && props.onRequest && !requested.value) {
    requested.value = true
    refresh()
  }
}

async function request(params?: Record<string, any>) {
  loading.value = true
  try {
    const res: any = await props.onRequest?.({ ...params })
    if (isArray(res)) {
      options.value = res
    }
  }
  finally {
    loading.value = false
  }
}

function refresh(params?: Record<string, any>) {
  request(params)
}

// 立即执行
if (props.immediate) {
  refresh()
}

defineExpose({
  refresh,
})
</script>

<template>
  <NSelect
    v-bind="pickedSelectProps"
    v-model:value="value"
    :loading
    :options
    @update:show="handleUpdateShow"
  />
</template>
