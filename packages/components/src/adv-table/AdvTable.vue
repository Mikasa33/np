<script setup lang="ts">
import { ref } from 'vue'
import { NpTable, tableProps as npTableProps } from '../table'
import { NpFlex1 } from '../flex'
import { NpSearchKeyword } from '../search-keyword'
import type { TableProps } from '../table'
import { pickProps } from '../utils'
import type { AdvTableSlots } from './types'
import { advTableProps } from './props'

defineOptions({
  name: 'NpAdvTable',
})

const props = defineProps(advTableProps)
defineSlots<AdvTableSlots>()

const tableRef = ref()
const tableProps = pickProps(props, npTableProps)
const loading = ref()
const searchParams = ref<any>({
  keyword: null,
  field: null,
})
async function onRequest(params: Record<string, any>) {
  return props?.onRequest?.({ ...params, ...searchParams })
}
function handleSearch(keyword: string | null, field: string | number | null) {
  searchParams.value = {
    keyword,
    field,
  }
  tableRef.value.reload(searchParams.value)
}
</script>

<template>
  <NpTable
    ref="tableRef"
    v-bind="tableProps"
    v-model:loading="loading"
    :on-request
  >
    <template #header>
      <NpFlex1 />
      <NpSearchKeyword
        v-if="searchable"
        v-bind="(searchProps as any)"
        v-model:value="searchParams.keyword"
        v-model:field="searchParams.field"
        :disabled="loading"
        :loading="loading || undefined"
        @search="handleSearch"
      />
    </template>
  </NpTable>
</template>
