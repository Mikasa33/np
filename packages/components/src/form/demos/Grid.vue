<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { NpFormProps } from '..'
import { NpForm } from '..'

const formModel = ref({})
const formOptions = ['groode', 'veli good', 'emazing', 'lidiculous'].map(
  v => ({
    label: v,
    value: v,
  }),
)
const formProps = reactive<NpFormProps>({
  labelWidth: 100,
  giSpan: 12,
  items: [
    {
      path: 'input',
      label: '输入框',
      component: 'NInput',
    },
    {
      path: 'select',
      label: '下拉框',
      component: 'NSelect',
      componentProps: {
        options: formOptions,
      },
    },
    {
      path: 'textarea',
      label: '多行文本框',
      component: 'NInput',
      componentProps: {
        type: 'textarea',
      },
      span: 24,
    },
  ],
})
</script>

<template>
  <NpForm
    v-bind="formProps"
    v-model:model="formModel"
  />
</template>
