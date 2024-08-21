<script lang="ts" setup>
import { h, reactive } from 'vue'
import type { TreeOption } from 'naive-ui'
import type { TreeProps } from '@mikasa33/np'
import { NpTree } from '@mikasa33/np'

const treeProps = reactive<TreeProps>({
  blockLine: true,
  expandOnClick: true,
  immediate: true,
  onRequest: (): Promise<TreeOption[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            key: '1',
            label: '道生一',
            children: [
              { key: '1-1', label: '一生二' },
            ],
          },
          {
            key: '2',
            label: '道生一',
            children: [
              { key: '2-1', label: '一生二' },
            ],
          },
          { key: '3', label: '道生一' },
        ])
      }, 1000)
    })
  },
  // 优先级低于插槽
  renderLabel: ({ option }: { option: TreeOption }) => {
    return h('span', option.key !== '2' ? option.label : 'renderLabel')
  },
})
</script>

<template>
  <NpTree v-bind="treeProps">
    <template #label-1>
      <span>slot</span>
    </template>
  </NpTree>
</template>
