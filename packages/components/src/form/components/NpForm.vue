<script setup lang="ts">
import type { FormInst } from 'naive-ui'
import type { FormValidateCallback, ShouldRuleBeApplied } from 'naive-ui/es/form/src/interface'
import { isNull, isString, isUndefined, omit } from 'lodash-es'
import { ref } from 'vue'
import { NForm, NFormItemGi, NGrid } from 'naive-ui'
import { reactiveOmit, useArrayFilter } from '@vueuse/core'
import type { NpFormItemProps, NpFormProps } from '../types/props'
import { components } from '../configs/components'
import { useModel } from '../composables/useModel'

const props = withDefaults(defineProps<NpFormProps>(), {
  /**
   * 栅格占据的列数，默认 24
   */
  giSpan: 24,
  /**
   * 表单项，默认空数组
   */
  items: () => [],
  /**
   * 标签显示的位置，默认居左
   */
  labelPlacement: 'left',
})
const model = defineModel<any>('model', { default: ref({}) })
const items = useArrayFilter(props.items, (item: NpFormItemProps) => !isUndefined(item.path) && !isNull(item.path))
const { resetModel } = useModel(props, model, items)
const formRef = ref<FormInst>()
const formProps = reactiveOmit(props, 'defaultValues', 'gridProps', 'items', 'model')
/**
 * 初始化表单项 props
 * @param item 表单项 props
 * @returns 初始化后的表单项 props
 */
function initFormItemGiProps(item: NpFormItemProps) {
  return {
    // 栅格占据的列数，默认为 24
    span: item.span ?? props.giSpan,
    ...omit(item, ...['component', 'componentProps'] as const),
  }
}
/**
 * 渲染表单项组件
 * @param item 表单项 props
 * @returns 渲染组件
 */
function renderComponent(item: NpFormItemProps) {
  return isString(item.component) ? components[item.component] : item.component
}
function reset() {
  resetModel()
  restoreValidation()
}
function validate(callback?: FormValidateCallback, shouldRuleBeApplied?: ShouldRuleBeApplied) {
  return formRef.value?.validate(callback, shouldRuleBeApplied)
}
function restoreValidation() {
  return formRef.value?.restoreValidation()
}
defineExpose({
  reset,
  validate,
  restoreValidation,
})
</script>

<template>
  <NForm
    ref="formRef"
    v-bind="formProps"
    :model
  >
    <NGrid v-bind="gridProps">
      <NFormItemGi
        v-for="item in items"
        :key="item.path"
        v-bind="initFormItemGiProps(item)"
      >
        <!-- 表单项插槽 -->
        <slot
          v-if="$slots[`item-${item.path}`]"
          :name="`item-${item.path}`"
          :props="item"
          :path="item.path!"
          :model
        />
        <!-- 表单项组件 -->
        <Component
          :is="renderComponent(item)"
          v-else
          v-model:value="model[item.path!]"
          v-bind="item.componentProps"
        />
      </NFormItemGi>
    </NGrid>
  </NForm>
</template>
