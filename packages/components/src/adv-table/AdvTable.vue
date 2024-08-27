<script setup lang="tsx">
import { computed, ref } from 'vue'
import { NButton, NCard, NEl, NFlex, NTooltip } from 'naive-ui'
import { isNil, isString } from 'lodash-es'
import { useFullscreen } from '../composables/useFullscreen'
import { NpTable, tableProps as npTableProps } from '../table'
import { NpFlex1 } from '../flex'
import { NpSearchKeyword } from '../search-keyword'
import { pickProps } from '../utils'
import { NpDrawer } from '../drawer'
import { NpForm } from '../form'
import { NpModal } from '../modal'
import { NpPopover } from '../popover'
import { useSlotsFilter } from '../composables/useSlotsFilter'
import type { AdvTableInstance, AdvTableSlots } from './types'
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

const wrapRef = ref()
const tableRef = ref()
const formRef = ref()

const { isFullscreen, toggle: toggleFullscreen } = useFullscreen(wrapRef)
const filterShow = ref(false)
const loading = ref(false)
const searchValue = ref<any>({
  keyword: null,
  field: null,
})
const filterValue = ref<any>({})

function getMergeParams(params: Record<string, any>) {
  const result = {
    ...params,
    ...filterValue.value,
  }
  if (isNil(searchValue.value.keyword) || searchValue.value.keyword === '') {
    return result
  }
  return {
    ...result,
    ...searchValue.value,
  }
}

async function onRequest(params: Record<string, any>) {
  return props?.onRequest?.(getMergeParams(params))
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

function Btn(props: { icon: string, onClick: () => void }) {
  return (
    <NButton
      class="!h-34px !w-34px !p-0"
      onClick={handleClickFilterBtn}
    >
      <div class={props.icon} />
    </NButton>
  )
}

function FilterBtn(innerProps: { icon: string, onClick: () => void }) {
  if (props.filterPreset === 'popover') {
    return (
      <NpPopover
        v-model:show={filterShow.value}
        title={title}
        {...props.filterPopupProps}
        trigger="click"
        v-slots={{
          trigger: () => Btn(innerProps),
          footer: PopupCardBtns,
        }}
      >
        {Form()}
      </NpPopover>
    )
  }
  return Btn(innerProps)
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

defineExpose<AdvTableInstance>({
  ...tableRef.value,
})
</script>

<template>
  <NEl
    ref="wrapRef"
    class="z-1000 wh-full flex flex-1"
    :class="{
      'px-24px py-20px': isFullscreen,
    }"
    :style="{
      backgroundColor: 'var(--card-color)',
    }"
  >
    <NpTable
      ref="tableRef"
      v-bind="tableProps"
      v-model:loading="loading"
      :columns
      flex-height
      :on-request
      class="flex-1"
    >
      <template
        v-if="(searchable || filterable || refreshable || fullscreenable || slots.action || slots.search)"
        #header
      >
        <NFlex
          align="center"
          :wrap="false"
        >
          <slot name="action" />
        </NFlex>

        <NpFlex1 />

        <NFlex
          align="center"
          :wrap="false"
        >
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
            <NTooltip>
              <template #trigger>
                <div>
                  <FilterBtn
                    icon="i-icon-park-outline-filter"
                    :on-click="handleClickFilterBtn"
                  />
                </div>
              </template>
              筛选
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

          <template v-if="refreshable">
            <NTooltip>
              <template #trigger>
                <Btn
                  icon="i-icon-park-outline-refresh"
                  :on-click="() => tableRef.refresh()"
                />
              </template>
              刷新
            </NTooltip>
          </template>

          <template v-if="fullscreenable">
            <NTooltip>
              <template #trigger>
                <Btn
                  :icon="isFullscreen ? 'i-icon-park-outline-off-screen' : 'i-icon-park-outline-full-screen'"
                  :on-click="toggleFullscreen"
                />
              </template>
              {{ isFullscreen ? '还原' : '全屏' }}
            </NTooltip>
          </template>
        </NFlex>
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
  </NEl>
</template>
