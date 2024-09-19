<script lang="ts" setup>
import type { TableProps } from '@mikasa33/np'
import { NpTable } from '@mikasa33/np'
import { reactive, ref } from 'vue'

const checkedRowKeys = ref<number[]>([])
const tableProps = reactive<TableProps>({
  immediate: true,
  onRequest: (): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [
            { id: 1, name: '张三', age: 18, address: '北京市' },
            { id: 2, name: '李四', age: 20, address: '上海市' },
            { id: 3, name: '王五', age: 22, address: '广州市' },
          ],
          total: 3,
        })
      }, 1000)
    })
  },
  columns: [
    { type: 'selection' },
    { key: 'name', title: '姓名' },
    { key: 'age', title: '年龄' },
    { key: 'address', title: '地址' },
  ],
})
</script>

<template>
  <NpTable
    v-bind="tableProps"
    v-model:checked-row-keys="checkedRowKeys"
    class="h-230px"
  />
  <pre>{{ checkedRowKeys }}</pre>
</template>
