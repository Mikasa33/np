<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { NpTableProps } from '..'
import { NpTable, NpTableSearch } from '..'
import { NpFlex1 } from '../../flex'

const tableRef = ref()
const tableProps = reactive<NpTableProps>({
  immediate: true,
  onRequest: (params?: Record<string, any>): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [
            { id: 1, name: '张三', age: 18, birthday: 1072886400000 },
            { id: 2, name: '李四', age: 19, birthday: 1041350400000 },
            { id: 3, name: '王五', age: 20, birthday: 1009814400000 },
          ].filter((item: any) => !params?.keyword || item.name.includes(params.keyword)),
          total: 3,
        })
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
      key: 'birthday',
      title: '出生日期',
    },
  ],
})
const keyword = ref('')
</script>

<template>
  <NpTable
    ref="tableRef"
    v-bind="tableProps"
  >
    <template #header>
      <NpFlex1 />
      <div>
        <NpTableSearch v-model:value="keyword" />
      </div>
    </template>
  </NpTable>
</template>
