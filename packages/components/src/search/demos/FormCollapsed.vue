<script setup lang="ts">
import { ref } from 'vue'
import { NpSearchForm } from '..'
import type { NpFormProps } from '../../form'

const formValue = ref({})
const formProps: NpFormProps = {
  labelWidth: 56,
  giSpan: 8,
  items: [
    {
      path: 'name',
      label: '姓名',
      component: 'NInput',
    },
    {
      path: 'age',
      label: '年龄',
      component: 'NInputNumber',
    },
    {
      path: 'gender',
      label: '性别',
      component: 'NSelect',
      componentProps: {
        options: [
          { label: '男', value: 'male' },
          { label: '女', value: 'female' },
        ],
      },
    },
  ],
}
</script>

<template>
  <NpSearchForm
    v-model:value="formValue"
    :form-props="formProps"
    collapsable
  />
  <pre>{{ formValue }}</pre>
</template>
