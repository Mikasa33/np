<script setup lang="ts">
import { NButton, NFlex } from 'naive-ui'
import { computed, reactive, ref } from 'vue'
import { cloneDeep } from 'lodash-es'
import type { NpSearchFormProps } from '../types/props'
import type { NpSearchFormSlots } from '../types/slots'
import { NpForm } from '../../form'

const props = withDefaults(defineProps<NpSearchFormProps>(), {

})
const emits = defineEmits<{
  search: [value: any]
}>()
const slots = defineSlots<NpSearchFormSlots>()
const value = defineModel<NpSearchFormProps['value']>('value', { default: () => ({}) })
const formRef = ref()
const collapsed = ref(props.formProps?.gridProps?.collapsed ?? true)
const formProps = computed(() => {
  return {
    ...props.formProps,
    giSuffixSpan: props.collapsable ? props.formProps?.giSuffixSpan : 24,
    gridProps: {
      ...props.formProps?.gridProps,
      collapsed: props.collapsable ? collapsed.value : false,
    },
  }
})
function handleReset() {
  formRef.value.reset()
}
function handleSearch() {
  emits('search', cloneDeep(value.value))
}
function handleClickCollaspe() {
  collapsed.value = !collapsed.value
}
</script>

<template>
  <!-- <NpForm
    ref="formRef"
    v-bind="formProps"
    v-model:value="value"
  >
    <template #gi-suffix="{ overflow }">
      <slot
        v-if="slots.action"
        name="action"
        :reset="handleReset"
        :search="handleSearch"
      />
      <NFlex
        v-else
        justify="end"
        :wrap="false"
      >
        <NButton @click="handleReset">
          重置
        </NButton>
        <NButton
          type="primary"
          @click="handleSearch"
        >
          搜索
        </NButton>
        <NButton
          v-if="collapsable"
          v-show="overflow || !collapsed"
          text
          @click="handleClickCollaspe"
        >
          {{ collapsed ? '展开' : '收起' }}
          <div :class="collapsed ? 'i-icon-park-outline-down' : 'i-icon-park-outline-up'" />
        </NButton>
      </NFlex>
    </template>
  </NpForm> -->
  <div>123</div>
</template>
