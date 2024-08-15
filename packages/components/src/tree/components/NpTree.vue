<script setup lang="ts">
import type { TreeOption } from 'naive-ui'
import { NEmpty, NSpin, NTree } from 'naive-ui'
import { reactiveOmit } from '@vueuse/core'
import { computed, h, onMounted, reactive, ref } from 'vue'
import { isArray } from 'lodash-es'
import type { NpTreeProps } from '../types/props'
import type { NpTreeSlots } from '../types/slots'
import { useSlotsFilter } from '../../_composables/useSlotsFilter'

const props = withDefaults(defineProps<NpTreeProps>(), {
  childrenField: 'children',
  disabledField: 'disabled',
  keyboard: true,
  keyField: 'key',
  labelField: 'label',
  selectable: true,
})
const slots = defineSlots<NpTreeSlots>()
const checkedKeys = defineModel<Array<number | string>>('checkedKeys', { default: () => ([]) })
const expandedKeys = defineModel<Array<number | string>>('expandedKeys', { default: () => ([]) })
const loading = defineModel<boolean>('loading', { default: false })
const selectedKeys = defineModel<Array<number | string>>('selectedKeys', { default: () => ([]) })
const treeProps = reactiveOmit(props, 'checkedKeys', 'expandedKeys', 'selectedKeys')
const data = ref<any[]>([])
const { slotKeys } = useSlotsFilter((key: string) => key.includes('label-'))
/**
 * 节点内容的渲染函数
 * @param node 节点相关信息
 * @param node.option 节点信息
 * @param node.checked 节点是否被勾选
 * @param node.selected 节点是否被选中
 */
function renderLabel(node: { option: TreeOption, checked: boolean, selected: boolean }) {
  const slotKey = slotKeys.value.find((key: string) => key.replace('label-', '') === node.option.key)
  // 插槽，优先级最高
  if (slotKey) {
    return (slots as any)[slotKey](node)
  }
  // 节点内容的渲染函数
  if (props.renderLabel) {
    return props.renderLabel(node)
  }
  // 节点内容
  return node.option[props.labelField]
}
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
      :render-label="renderLabel"
      :class="{ 'opacity-50 pointer-events-none': loading }"
    >
      <!-- 树组件无数据时的插槽 -->
      <template #empty>
        <div :class="{ 'opacity-0': loading }">
          <slot
            v-if="slots.empty"
            name="empty"
          />
          <NEmpty v-else />
        </div>
      </template>
    </NTree>
  </NSpin>
</template>
