<script setup lang="ts">
import type { AdvTableProps } from '@mikasa33/np'
import { NpAdvTable } from '@mikasa33/np'
import { NButton } from 'naive-ui'

const advTableProps: AdvTableProps = {
  filterProps: {

  },
  filterFormProps: {
    items: [
      {
        path: 'age',
        label: '年龄',
        component: 'NInputNumber',
        componentProps: {
          class: 'w-full',
        },
      },
      {
        path: 'address',
        label: '地址',
        component: 'NInput',
      },
    ],
  },
  searchProps: {
    fieldOptions: [
      { value: 'name', label: '姓名' },
      { value: 'age', label: '年龄' },
      { value: 'address', label: '地址' },
    ],
    fieldClass: '!w-80px',
  },
  immediate: true,
  pagination: true,
  onRequest: (params: any): Promise<any> => {
    return new Promise((resolve) => {
      const data = [
        { id: 1, name: '张三', age: 18, address: '北京市' },
        { id: 2, name: '李四', age: 20, address: '上海市' },
        { id: 3, name: '王五', age: 22, address: '广州市' },
      ]
      let result = data
      if (params.field === 'name') {
        result = data.filter((item: any) => item.name.includes(params.keyword))
      }
      setTimeout(() => {
        resolve({
          data: result,
          total: result.length,
        })
      }, 1000)
    })
  },
  columns: [
    { key: 'name', title: '姓名' },
    { key: 'age', title: '年龄' },
    { key: 'address', title: '地址' },
  ],
}
</script>

<template>
  <NpAdvTable v-bind="advTableProps">
    <template #action>
      <NButton type="primary">
        按钮 1
      </NButton>
      <NButton type="error">
        按钮 2
      </NButton>
    </template>
  </NpAdvTable>
</template>
