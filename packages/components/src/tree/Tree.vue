<script setup lang="ts">
import type { TreeOption, TreeProps } from 'naive-ui'
import { NEmpty, NSpin, NTree, treeProps as nTreeProps } from 'naive-ui'
import { ref } from 'vue'
import { isArray } from 'lodash-es'
import { useSlotsFilter } from '../composables/useSlotsFilter'
import { pickProps } from '../utils'
import { useRequest } from '../composables/useRequest'
import { treeProps } from './props'
import type { TreeSlots } from './types'

defineOptions({
  name: 'NpTree',
})

const props = defineProps(treeProps)
const slots = defineSlots<TreeSlots>()

const checkedKeys = defineModel<Array<number | string>>('checkedKeys', { default: () => [] })
const data = defineModel<Array<TreeOption>>('data', { default: () => [] })
const expandedKeys = defineModel<Array<number | string>>('expandedKeys', { default: () => [] })
const loading = defineModel<boolean>('loading', { default: false })
const selectedKeys = defineModel<Array<number | string>>('selectedKeys', { default: () => [] })

const pickedTreeProps = pickProps<TreeProps>(props, nTreeProps)

const { slotKeys } = useSlotsFilter((key: string) => key.includes('label-'))
const { execute } = useRequest(props.onRequest, {
  data,
  immediate: props.immediate,
  loading,
  hook: (data: any) => {
    if (isArray(data)) {
      return data
    }
    return []
  },
})

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

defineExpose({
  refresh: execute,
})
</script>

<template>
  <NSpin
    :show="loading"
    size="small"
  >
    <NTree
      v-bind="pickedTreeProps"
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
