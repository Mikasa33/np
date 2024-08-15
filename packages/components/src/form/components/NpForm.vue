<script setup lang="ts">
import type { FormInst } from 'naive-ui'
import type { FormValidateCallback, ShouldRuleBeApplied } from 'naive-ui/es/form/src/interface'
import { isString, omit } from 'lodash-es'
import { reactive, ref } from 'vue'
import { NForm, NFormItemGi, NGi, NGrid } from 'naive-ui'
import { reactiveOmit, useArrayFilter } from '@vueuse/core'
import type { NpFormItemProps, NpFormProps } from '../types/props'
import { components } from '../configs/components'
import { useValue } from '../composables/useValue'
import type { NpFormSlots } from '../types/slots'

const props = withDefaults(defineProps<NpFormProps>(), {
  giSpan: 24,
  items: () => [],
  labelPlacement: 'left',
})
const slots = defineSlots<NpFormSlots>()
const value = defineModel<any>('value', { default: () => ({}) })
const formItems = useArrayFilter(props.items, (item: NpFormItemProps) => !!item.path)
const slotItems = useArrayFilter(props.items, (item: NpFormItemProps) => !!item.path || !!item.slot)
const { reset: resetValue } = useValue(props, value, formItems)
const formRef = ref<FormInst>()
const formProps = reactiveOmit(props, 'defaultValues', 'giSpan', 'gridProps', 'items', 'value')
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
/**
 * 重置表单数据和校验状态
 */
function reset() {
  resetValue()
  restoreValidation()
}
/**
 * 验证表单
 * @param callback
 * @param shouldRuleBeApplied
 */
function validate(callback?: FormValidateCallback, shouldRuleBeApplied?: ShouldRuleBeApplied) {
  return formRef.value?.validate(callback, shouldRuleBeApplied)
}
/**
 * 还原到未校验的状态
 */
function restoreValidation() {
  return formRef.value?.restoreValidation()
}
/**
 * 获取表项中收集到的值的对象
 * @param path 将值收集到外层表单 model 对象的路径
 */
function getValue(path?: string) {
  if (path) {
    return value.value[path]
  }
  return value.value
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
    v-bind="formProps"
    :model="value"
  >
    <!-- TODO: inline mode -->
    <NGrid v-bind="gridProps">
      <NFormItemGi
        v-for="item in slotItems"
        :key="item.path"
        v-bind="initFormItemGiProps(item)"
      >
        <!-- 表单项 path 属性插槽，优先级最高 -->
        <slot
          v-if="$slots[`item-${item.path}`]"
          :name="`item-${item.path}`"
          :props="item"
          :path="item.path!"
          :value
        />
        <!-- 表单项 slot 属性插槽 -->
        <slot
          v-else-if="$slots[`item-${item.slot}`]"
          :name="`item-${item.slot}`"
          :props="item"
          :path="item.path!"
          :value
        />
        <!-- 表单项组件 -->
        <Component
          :is="renderComponent(item)"
          v-else
          v-model:value="value[item.path!]"
          v-bind="item.componentProps"
        />
      </NFormItemGi>
      <!-- 栅格后缀插槽 -->
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
