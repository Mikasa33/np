<script lang="ts" setup>
import { reactive } from 'vue'
import type { NpTableProps } from '..'
import { NpTable } from '..'

const tableProps = reactive<NpTableProps>({
  immediate: true,
  onRequest: (): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: '张三', age: 18, address: '北京市' },
          { id: 2, name: '李四', age: 20, address: '上海市' },
          { id: 3, name: '王五', age: 22, address: '广州市' },
        ])
      }, 1000)
    })
  },
  columns: [
    {
      key: 'name',
      title: '姓名',
    },
    {
      key: 'age',
      title: '年龄',
    },
    {
      key: 'address',
      title: '地址',
    },
  ],
  pagination: false,
})
</script>

<template>
  <NpTable v-bind="tableProps" />
</template>
