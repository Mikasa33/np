<script setup lang="ts">
import type { FormInst, FormProps } from 'naive-ui'
import { NForm, NFormItemGi, NGi, NGrid, formItemGiProps, formProps as nFormProps } from 'naive-ui'
import { ref } from 'vue'
import { reactiveOmit, useArrayFilter } from '@vueuse/core'
import { get, isString, omit } from 'lodash-es'
import type { FormValidateCallback, ShouldRuleBeApplied } from 'naive-ui/es/form/src/interface'
import { pickProps } from '../utils'
import type { FormItemProps, FormSlots } from './types'
import { useValue } from './use-value'
import { components } from './components'
import { formProps } from './props'

defineOptions({
  name: 'NpForm',
})

const props = defineProps(formProps)
const slots = defineSlots<FormSlots>()

const value = defineModel<Record<string, any>>('value', { default: () => ({}) })

const pickedFormProps = pickProps<FormProps>(props, nFormProps)

const formRef = ref<FormInst>()
const formItems = useArrayFilter(props.items!, (item: FormItemProps) => !!item.path)
const slotItems = useArrayFilter(props.items!, (item: FormItemProps) => !!item.path || !!item.slot)
const { reset: resetValue } = useValue(props, value, formItems)

function mergeGridProps() {
  // 表单标签显示的位置为 top 时，xGap 默认为 16
  if (props.labelPlacement === 'top') {
    return {
      xGap: 16,
      ...props.gridProps,
    }
  }
  return props.gridProps
}

function mergeFormItemGiProps(item: FormItemProps) {
  const pickedProps = pickProps<FormItemProps>(item, formItemGiProps)
  return {
    ...pickedProps,
    // 栅格占据的列数，默认为 24
    span: item.span ?? props.giSpan,
  }
}

function renderComponent(item: FormItemProps) {
  return isString(item.component) ? components[item.component] : item.component
}

function getValue(path?: string) {
  if (path) {
    return get(value.value, path)
  }
  return value.value
}

function reset() {
  // 重置默认值
  resetValue()
  // 还原到未校验的状态
  restoreValidation()
}

function restoreValidation() {
  return formRef.value?.restoreValidation()
}

function validate(callback?: FormValidateCallback, shouldRuleBeApplied?: ShouldRuleBeApplied): any {
  return formRef.value?.validate(callback, shouldRuleBeApplied)
}

defineExpose({
  getValue,
  reset,
  restoreValidation,
  validate,
})
</script>

<template>
  <NForm
    ref="formRef"
    v-bind="pickedFormProps"
    :model="value"
  >
    <NGrid v-bind="mergeGridProps()">
      <NFormItemGi
        v-for="item in slotItems"
        :key="item.path"
        v-bind="mergeFormItemGiProps(item)"
      >
        <!-- 表单项 path 属性插槽，优先级最高 -->
        <slot
          v-if="slots[`item-${item.path}`]"
          :name="`item-${item.path}`"
          :props="item"
          :path="item.path!"
          :value
        />
        <slot
          v-else-if="slots[`item-${item.slot}`]"
          :name="`item-${item.slot}`"
          :props="item"
          :path="item.path!"
          :value
        />
        <Component
          :is="renderComponent(item)"
          v-else
          v-model:value="value[item.path!]"
          v-bind="item.componentProps"
        />
      </NFormItemGi>
      <NGi
        v-if="slots['gi-suffix']"
        :span="giSuffixSpan ?? giSpan"
        suffix
        #="{ overflow }"
      >
        <slot
          name="gi-suffix"
          :overflow
        />
      </NGi>
    </NGrid>
  </NForm>
</template>
