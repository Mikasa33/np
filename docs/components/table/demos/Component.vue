<script lang="ts" setup>
import type { TableProps } from '@mikasa33/np'
import { NpTable, NpViewTime } from '@mikasa33/np'
import { reactive } from 'vue'

const tableProps = reactive<TableProps>({
  immediate: true,
  onRequest: (): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [
            { id: 1, name: '张三', age: 18, birthday: 1072886400000 },
            { id: 2, name: '李四', age: 19, birthday: 1041350400000 },
            { id: 3, name: '王五', age: 20, birthday: 1009814400000 },
          ],
          total: 3,
        })
      }, 1000)
    })
  },
  columns: [
    { key: 'name', title: '姓名' },
    {
      key: 'age',
      title: '年龄',
      component: 'NpViewTag',
      componentProps: {
        type: 'success',
      },
    },
    {
      key: 'birthday',
      title: '出生日期',
      component: NpViewTime,
      componentProps: {
        format: 'YYYY-MM-DD',
      },
    },
  ],
})
</script>

<template>
  <NpTable
    v-bind="tableProps"
    class="h-230px"
  />
</template>
