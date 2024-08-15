<script setup lang="ts">
import { NInput, NInputGroup, NSelect } from 'naive-ui'
import { reactiveOmit, watchDebounced } from '@vueuse/core'
import { computed, watch } from 'vue'
import type { NpSearchKeywordProps } from '../types/props'

const props = withDefaults(defineProps<NpSearchKeywordProps>(), {
  clearable: true,
  debounce: 500,
  fieldOptions: () => [],
  loading: undefined,
  placeholder: '请输入关键词',
})
const emits = defineEmits<{
  /**
   * 输入框值改变时触发
   */
  search: [value?: NpSearchKeywordProps['value'], field?: NpSearchKeywordProps['field']]
}>()
const value = defineModel<NpSearchKeywordProps['value']>('value')
const field = defineModel<NpSearchKeywordProps['field']>('field')
const inputProps = reactiveOmit(props, 'fieldOptions')
const selectField = computed(() => props.fieldOptions.length)
watch(
  () => props.fieldOptions,
  (val) => {
    const find = val.find(item => item.value === field.value)
    if (!find) {
      field.value = val?.[0]?.value as any
    }
  },
  {
    immediate: true,
  },
)
watchDebounced(
  value,
  () => {
    emits('search', value.value, field.value)
  },
  {
    debounce: props.debounce,
  },
)
</script>

<template>
  <NInputGroup>
    <NSelect
      v-if="selectField"
      v-model:value="field"
      :options="fieldOptions"
      :class="selectClass"
      class="w-128px"
    />
    <NInput
      v-bind="inputProps"
      v-model:value="value"
      :class="inputClass"
    >
      <template #prefix>
        <slot
          v-if="$slots['input-prefix']"
          name="input-prefix"
        />
        <div
          v-else-if="!selectField"
          class="i-icon-park-outline-search mr-4px"
        />
      </template>
    </NInput>
  </NInputGroup>
</template>
