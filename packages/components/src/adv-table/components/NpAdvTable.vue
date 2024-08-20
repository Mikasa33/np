<!-- <script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { ref } from 'vue'
import { NpTable } from '../../table'
import { NpFlex1 } from '../../flex'
import { NpSearchKeyword } from '../../search'
import type { NpAdvTableProps } from '../types/props'

const props = withDefaults(defineProps<NpAdvTableProps>(), {

})
const tableRef = ref()
const tableProps = reactiveOmit(props, 'searchProps')
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
        v-bind="searchProps"
        v-model:value="searchParams.keyword"
        v-model:field="searchParams.field"
        :disabled="loading"
        @search="handleSearch"
      />
    </template>
  </NpTable>
</template> -->
