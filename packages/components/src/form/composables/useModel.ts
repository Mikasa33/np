import type { MaybeRefOrGetter, Ref } from 'vue'
import { computed, onMounted, toValue } from 'vue'
import type { NpFormItemProps, NpFormProps } from '../types/props'

/**
 * 表单数据
 * @param props 表单属性
 * @param model 表单数据
 * @param items 表单项
 */
export function useModel(props: NpFormProps, model: Ref<any>, items: MaybeRefOrGetter<NpFormItemProps[]>) {
  // 默认数据
  const defaultValues = computed<any>(() => {
    const defaultValues = props.defaultValues ?? {}
    const values: Record<string, any> = {}
    for (const item of toValue(items)) {
      // item.defaultValue > props.defaultValues
      values[item.path!] = item.defaultValue ?? defaultValues[item.path!] ?? null
    }
    return values
  })
  /**
   * 初始化表单数据
   */
  function initModel() {
    for (const item of toValue(items)) {
      if (!model.value[item.path!]) {
        model.value[item.path!] = defaultValues.value[item.path!] ?? null
      }
    }
  }
  /**
   * 重置表单值
   */
  function resetModel() {
    for (const item of toValue(items)) {
      model.value[item.path!] = defaultValues.value[item.path!] ?? null
    }
  }
  onMounted(() => {
    // 初始化表单数据
    initModel()
  })
  return {
    defaultValues,
    model,
    resetModel,
  }
}
