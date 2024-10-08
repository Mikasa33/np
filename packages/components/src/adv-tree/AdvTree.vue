<script setup lang="tsx">
import type { DropdownOption, TreeOption } from 'naive-ui'
import type { AdvTreeSlots } from './types'
import { isNil, isString } from 'lodash-es'
import { NButton, NDropdown, NEl, NFlex, NText, NTooltip } from 'naive-ui'
import { ref } from 'vue'
import { NpDrawer } from '../drawer'
import { NpFlex1 } from '../flex'
import { NpForm } from '../form'
import { NpModal } from '../modal'
import { NpPopover } from '../popover'
import { NpSearchKeyword } from '../search-keyword'
import { NpTree } from '../tree'
import { treeProps as npTreeProps } from '../tree/props'
import { pickProps } from '../utils'
import { advTreeProps } from './props'

defineOptions({
  name: 'NpAdvTree',
})

const props = defineProps(advTreeProps)
const emits = defineEmits<{
  edit: [node: any]
  delete: [node: any]
}>()
defineSlots<AdvTreeSlots>()

const treeRef = ref()
const formRef = ref()

const treeProps = pickProps(props, npTreeProps)
const title = '筛选'

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
  treeRef.value.reload()
}

function handleClickFilterBtn() {
  if (props.filterPreset !== 'popover') {
    filterShow.value = true
  }
}

function handleRefresh() {
  treeRef.value.reload()
}

function handleSelectDropdown(key: string | number, option: DropdownOption, node: { option: TreeOption, checked: boolean, selected: boolean }) {
  emits(key as any, node)
}

function renderSuffix(node: { option: TreeOption, checked: boolean, selected: boolean }) {
  const options = props.nodeActions.map((item) => {
    if (isString(item)) {
      return {
        key: item,
        label: item === 'edit' ? '编辑' : item === 'delete' ? () => <NText type="error">删除</NText> : '操作',
      }
    }
    return item
  })

  return (
    <NDropdown
      trigger="click"
      options={options}
      placement="bottom-end"
      class="min-w-80px"
      onSelect={(key, option) => handleSelectDropdown(key, option, node)}
    >
      <div
        class="h-[var(--n-node-content-height)] w-24px flex-center text-16px"
        onClick={e => e.stopPropagation()}
      >
        <div class="i-icon-park-outline-more-one" />
      </div>
    </NDropdown>
  )
}

function Btn({ icon, onClick, ...props }: { icon: string, onClick: () => void }) {
  return (
    <NButton
      {...props}
      class="!h-34px !w-34px !p-0"
      onClick={onClick}
    >
      <div class={icon} />
    </NButton>
  )
}

function FilterBtn(innerProps: any) {
  if (props.filterPreset === 'popover') {
    return (
      <NpPopover
        title={title}
        {...props.filterPopupProps as any}
        v-model:show={filterShow.value}
        trigger="click"
        v-slots={{
          trigger: Btn(innerProps),
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
</script>

<template>
  <NEl
    class="wh-full flex flex-1 flex-col"
    :style="{
      backgroundColor: 'var(--card-color)',
    }"
  >
    <NpTree
      ref="treeRef"
      v-bind="treeProps"
      :on-request
      :render-suffix
      class="w-full [&_.n-tree-node-content]:pr-0"
    >
      <template #header>
        <slot name="action" />

        <NpSearchKeyword
          v-if="searchable"
          v-bind="(searchProps as any)"
          v-model:value="searchValue.keyword"
          v-model:field="searchValue.field"
          :disabled="loading"
          class="flex-1"
          @search="handleSearch"
        />
        <NpFlex1 v-else />

        <template v-if="filterable">
          <NTooltip>
            <template #trigger>
              <div>
                <FilterBtn
                  icon="i-icon-park-outline-filter"
                  @click="handleClickFilterBtn"
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
                @click="handleRefresh"
              />
            </template>
            刷新
          </NTooltip>
        </template>
      </template>
    </NpTree>
  </NEl>
</template>
