<script lang="ts" setup>
import type { TreeProps } from '@mikasa33/np'
import type { TreeOption } from 'naive-ui'
import { NpTree } from '@mikasa33/np'
import { reactive } from 'vue'

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
})
</script>

<template>
  <NpTree v-bind="treeProps" />
</template>
