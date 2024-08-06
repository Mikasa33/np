<script setup lang="ts">
import { NDataTable } from 'naive-ui'
import { onMounted, ref } from 'vue'
import { isArray } from 'lodash-es'
import { reactiveOmit } from '@vueuse/core'
import type { NpTableProps } from '../types/props'

const props = withDefaults(defineProps<NpTableProps>(), {
  /**
   * 需要展示的列，默认空数组
   */
  columns: () => [],
  /**
   * 替代请求数据中的 data 字段名，默认 data
   */
  dataField: 'data',
})
const loading = defineModel<boolean>('loading')
const data = ref<any[]>([])
const tableProps = reactiveOmit(props, 'dataField', 'immediate', 'loading', 'onRequest')
/**
 * 请求数据
 */
async function request() {
  loading.value = true
  try {
    const res: any = await props.onRequest?.()
    if (isArray(res)) {
      data.value = res
    }
    else {
      data.value = res[props.dataField]
    }
  }
  finally {
    loading.value = false
  }
}
/**
 * 刷新
 */
function refresh() {
  request()
}
onMounted(() => {
  // 立即请求数据
  if (props.immediate) {
    request()
  }
})
defineExpose({
  refresh,
})
</script>

<template>
  <NDataTable
    v-bind="tableProps"
    remote
    :data
    :loading
  />
</template>
