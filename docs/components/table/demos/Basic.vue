<script lang="ts" setup>
import { ref } from 'vue'
import { NButton } from 'naive-ui'
import { NpTable } from '@rezero/np'

const tableRef = ref()
const tableProps = {
  immediate: true,
  onRequest: (): Promise<any[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { name: '张三', age: 18, address: '北京市' },
          { name: '李四', age: 20, address: '上海市' },
          { name: '王五', age: 22, address: '广州市' },
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
}
</script>

<template>
  <div class="mb-8px">
    <NButton @click="tableRef.refresh()">
      刷新
    </NButton>
  </div>
  <NpTable
    ref="tableRef"
    v-bind="tableProps"
  />
</template>
