<script setup lang="ts">
import { ref } from 'vue'
import { NButton } from 'naive-ui'
import { NpSearchForm } from '..'
import type { NpFormProps } from '../../form'

const formValue = ref({})
const formProps: NpFormProps = {
  labelWidth: 56,
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
function handleSearch(value: any) {
  formValue.value = value
}
</script>

<template>
  <NpSearchForm
    :form-props="formProps"
    @search="handleSearch"
  >
    <template #action="{ search }">
      <NButton
        type="primary"
        class="ml-56px"
        @click="search"
      >
        搜索
      </NButton>
    </template>
  </NpSearchForm>
  <pre>{{ formValue }}</pre>
</template>
