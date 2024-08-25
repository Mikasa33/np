<script setup lang="tsx">
import { computed, h, ref } from 'vue'
import { NButton, NFlex, NTooltip } from 'naive-ui'
import { isString, omit } from 'lodash-es'
import { NpTable, tableProps as npTableProps } from '../table'
import { NpFlex1 } from '../flex'
import { NpSearchKeyword } from '../search-keyword'
import { pickProps } from '../utils'
import { NpDrawer } from '../drawer'
import { NpForm } from '../form'
import { NpModal } from '../modal'
import { NpPopover } from '../popover'
import { useSlotsFilter } from '../composables/useSlotsFilter'
import type { AdvTableSlots } from './types'
import { advTableProps } from './props'

defineOptions({
  name: 'NpAdvTable',
})

const props = defineProps(advTableProps)
const emits = defineEmits<{
  edit: [row: any]
  delete: [row: any]
}>()
const slots = defineSlots<AdvTableSlots>()

const tableProps = pickProps(props, npTableProps)
const title = '筛选'
const columns = computed(() => {
  return [
    ...props.columns!,
    {
      key: 'action',
      title: '操作',
      render(row: any) {
        return (
          <NFlex>
            {props.columnActions.map((item) => {
              if (isString(item)) {
                return (
                  <NButton
                    type={item === 'edit' ? 'primary' : item === 'delete' ? 'error' : 'default'}
                    tertiary
                    size="small"
                    onClick={() => emits(item as any, row)}
                  >
                    {item === 'edit' ? '编辑' : item === 'delete' ? '删除' : '操作'}
                  </NButton>
                )
              }
              return item
            })}
          </NFlex>
        )
      },
    },
  ]
})

const { slotKeys } = useSlotsFilter((key: string) => key.includes('column-'))

const tableRef = ref()
const formRef = ref()

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

function handleCancel() {
  filterShow.value = false
}

function handleReset() {
  formRef.value.reset()
}

function handleSearch() {
  filterShow.value = false
  tableRef.value.reload()
}

function handleClickFilterBtn() {
  if (props.filterPreset !== 'popover') {
    filterShow.value = true
  }
}

function Btn() {
  return (
    <NButton
      {...props.filterBtnProps}
      class="!h-34px !w-34px !p-0"
      onClick={handleClickFilterBtn}
    >
      <div class="i-icon-park-outline-filter" />
    </NButton>
  )
}

function Form() {
  return (
    <NpForm
      ref={formRef}
      {...props.filterFormProps}
      showFeedback={false}
      yGap={props.filterFormProps.yGap ?? 16}
      value={filterValue.value}
      onUpdateValue={(val: any) => filterValue.value = val}
    />
  )
}

function PopupCardBtns() {
  return (
    <NFlex justify="end">
      <NButton onClick={handleCancel}>
        取消
      </NButton>
      <NButton onClick={handleReset}>
        重置
      </NButton>
      <NButton
        type="primary"
        onClick={handleSearch}
      >
        确认
      </NButton>
    </NFlex>
  )
}

function FilterBtn() {
  if (props.filterPreset === 'popover') {
    return (
      <NpPopover
        v-model:show={filterShow.value}
        title={title}
        {...props.filterPopupProps}
        trigger="click"
        v-slots={{
          trigger: () => Btn(),
          footer: PopupCardBtns,
        }}
      >
        {Form()}
      </NpPopover>
    )
  }
  return Btn()
}

defineExpose({
  ...tableRef.value,
})
</script>

<template>
  <NpTable
    ref="tableRef"
    v-bind="tableProps"
    v-model:loading="loading"
    :columns
    :on-request
  >
    <template
      v-if="(searchable || filterable || slots.action || slots.search)"
      #header
    >
      <slot name="action" />
      <NpFlex1 />
      <slot name="search" />
      <NpSearchKeyword
        v-if="searchable"
        v-bind="(searchProps as any)"
        v-model:value="searchValue.keyword"
        v-model:field="searchValue.field"
        :disabled="loading"
        @search="handleSearch"
      />
      <template v-if="filterable">
        <NTooltip v-bind="filterTooltipProps">
          <template #trigger>
            <div>
              <FilterBtn />
            </div>
          </template>
          {{ filterTooltipText }}
        </NTooltip>
        <Component
          :is="filterPreset === 'drawer' ? NpDrawer : filterPreset === 'modal' ? NpModal : null"
          v-model:show="filterShow"
          :title
          v-bind="(filterPopupProps as any)"
          @confirm="handleSearch"
        >
          <Form />

          <template #footer>
            <PopupCardBtns />
          </template>
        </Component>
      </template>
    </template>

    <template
      v-for="slot in slotKeys"
      :key="slot"
      #[slot]="slotProps"
    >
      <slot
        v-bind="slotProps"
        :name="(slot as any)"
      />
    </template>
  </NpTable>
</template>
