<script setup lang="ts">
import { ref } from 'vue'
import { NButton, NTooltip } from 'naive-ui'
import { NpTable, tableProps as npTableProps } from '../table'
import { NpFlex1 } from '../flex'
import { NpSearchKeyword } from '../search-keyword'
import { pickProps } from '../utils'
import { NpDrawer } from '../drawer'
import { NpForm } from '../form'
import type { AdvTableSlots } from './types'
import { advTableProps } from './props'

defineOptions({
  name: 'NpAdvTable',
})

const props = defineProps(advTableProps)
const slots = defineSlots<AdvTableSlots>()

const tableProps = pickProps(props, npTableProps)

const tableRef = ref()

const filterShow = ref(false)
const loading = ref(false)
const searchValue = ref<any>({
  keyword: null,
  field: null,
})
const filterValue = ref<any>({})

async function onRequest(params: Record<string, any>) {
  return props?.onRequest?.({ ...params, ...filterValue.value, ...searchValue.value })
}

function handleSearch() {
  filterShow.value = false
  tableRef.value.reload()
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
      <slot name="action" />
      <NpFlex1 />
      <slot
        v-if="slots.search"
        name="search"
      />
      <template v-else>
        <NpSearchKeyword
          v-if="searchable"
          v-bind="(searchProps as any)"
          v-model:value="searchValue.keyword"
          v-model:field="searchValue.field"
          :disabled="loading"
          @search="handleSearch"
        />
        <NTooltip>
          <template #trigger>
            <NButton
              class="!h-34px !w-34px !p-0"
              @click="filterShow = true"
            >
              <div class="i-icon-park-outline-filter" />
            </NButton>
          </template>
          筛选
        </NTooltip>
        <NpDrawer
          v-model:show="filterShow"
          title="筛选"
          v-bind="(filterProps as any)"
          @confirm="handleSearch"
        >
          <NpForm
            v-bind="(filterFormProps as any)"
            v-model:value="filterValue"
            :y-gap="filterFormProps.yGap ?? 16"
            :show-feedback="false"
          />
        </NpDrawer>
      </template>
    </template>
  </NpTable>
</template>
