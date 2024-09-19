<script lang="tsx" setup>
import type { TreeProps } from '@mikasa33/np'
import { NpAdvTree } from '@mikasa33/np'
import { reactive } from 'vue'

const treeProps = reactive<TreeProps>({
  searchable: true,
  refreshable: true,
  filterable: true,
  blockLine: true,
  expandOnClick: true,
  immediate: true,
  onRequest: (params: any): Promise<any> => {
    return new Promise((resolve) => {
      const data = [
        {
          key: '1',
          label: '道生一',
          children: [
            { key: '1-1', label: '一生二' },
          ],
        },
        {
          key: '2',
          label: '道生二',
          children: [
            { key: '2-1', label: '二生三' },
          ],
        },
        { key: '3', label: '道生三' },
      ]
      let result = data
      if (params.keyword) {
        result = data.filter((item: any) => item.label.includes(params.keyword))
      }
      setTimeout(() => {
        resolve(result)
      }, 1000)
    })
  },
})
</script>

<template>
  <NpAdvTree v-bind="treeProps">
    <template #action>
      action slot
    </template>
  </NpAdvTree>
</template>
