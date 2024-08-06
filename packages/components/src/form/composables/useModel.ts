import type { MaybeRefOrGetter, Ref } from 'vue'
import { computed, onMounted, toRef, toValue } from 'vue'
import type { NpFormItemProps, NpFormProps } from '../types/props'

/**
 * 表单数据
 * @param props 表单属性
 * @param model 表单数据
 * @param items 表单项
 */
export function useModel(props: NpFormProps, model: Ref<any>, items: MaybeRefOrGetter<NpFormItemProps[]>) {
  // 默认数据，item.defaultValue > props.defaultValues
  const defaultValues = computed<any>(() => {
    // 表单数据
    const defaultValues = toRef(props, 'defaultValues', {})
    const values: Record<string, any> = {}
    for (const item of toValue(items)) {
      values[item.path!] = item.defaultValue ?? defaultValues[item.path] ?? null
    }
    return values
  })
  // 表单数据
  function initModel() {
    for (const item of toValue(items)) {
      if (!model.value[item.path!]) {
        model.value[item.path!] = defaultValues.value[item.path!] ?? null
      }
    }
  }
  function resetModel() {
    for (const item of toValue(items)) {
      model.value[item.path!] = defaultValues.value[item.path!] ?? null
    }
  }
  onMounted(() => {
    initModel()
  })
  return {
    defaultValues,
    model,
    resetModel,
  }
}
