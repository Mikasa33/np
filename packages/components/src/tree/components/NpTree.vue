<script setup lang="ts">
import { NEmpty, NSpin, NTree } from 'naive-ui'
import { reactiveOmit } from '@vueuse/core'
import { onMounted, reactive, ref } from 'vue'
import { isArray } from 'lodash-es'
import type { NpTreeProps } from '../types/props'

const props = withDefaults(defineProps<NpTreeProps>(), {
  /**
   * 替代 TreeOption 中的 children 字段名，默认 children
   */
  childrenField: 'children',
  /**
   * 替代 TreeOption 中的 disabled 字段名
   */
  disabledField: 'disabled',
  /**
   * 是否支持键盘操作，默认 true
   */
  keyboard: true,
  /**
   * 替代 TreeOption 中的 key 字段名，默认 key
   */
  keyField: 'key',
  /**
   * 替代 TreeOption 中的 label 字段名，默认 label
   */
  labelField: 'label',
  /**
   * 节点是否可以被选中，默认 true
   */
  selectable: true,
})
const checkedKeys = defineModel<Array<number | string>>('checkedKeys', { default: reactive([]) })
const expandedKeys = defineModel<Array<number | string>>('expandedKeys', { default: reactive([]) })
const loading = defineModel<boolean>('loading', { default: false })
const selectedKeys = defineModel<Array<number | string>>('selectedKeys', { default: reactive([]) })
const treeProps = reactiveOmit(props, 'checkedKeys', 'expandedKeys', 'selectedKeys')
const data = ref<any[]>([])
/**
 * 请求数据
 * @param params 请求参数
 */
async function request(params?: Record<string, any>) {
  loading.value = true
  try {
    const res: any = await props.onRequest?.({ ...params })
    if (isArray(res)) {
      data.value = res
    }
  }
  finally {
    loading.value = false
  }
}
/**
 * 刷新
 * @param params 请求参数
 */
function refresh(params?: Record<string, any>) {
  request(params)
}
onMounted(() => {
  // 立即请求数据
  if (props.immediate) {
    refresh()
  }
})
defineExpose({
  refresh,
})
</script>

<template>
  <NSpin
    :show="loading"
    size="small"
  >
    <NTree
      v-bind="treeProps"
      v-model:checked-keys="checkedKeys"
      v-model:expanded-keys="expandedKeys"
      v-model:selected-keys="selectedKeys"
      v-model:data="data"
      :class="{
        'opacity-50 pointer-events-none': loading,
      }"
    >
      <template #empty>
        <NEmpty
          :class="{
            'opacity-0': loading,
          }"
        />
      </template>
    </NTree>
  </NSpin>
</template>
