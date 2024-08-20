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
  search: [value: string | null, field: string | number | null]
}>()
const value = defineModel<string | null>('value', { default: null })
const field = defineModel<string | number | null>('field', { default: null })
const inputProps = reactiveOmit(props, 'fieldOptions', 'fieldClass')
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
  <NInputGroup class="w-auto">
    <NSelect
      v-if="selectField"
      v-model:value="field"
      :options="fieldOptions"
      :class="fieldClass"
      class="w-128px"
    />
    <NInput
      v-bind="inputProps"
      v-model:value="value"
      :class="inputClass"
      class="w-200px"
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
