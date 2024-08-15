<script setup lang="ts">
import { NButton, NInputNumber } from 'naive-ui'
import { reactive, ref } from 'vue'
import type { NpFormProps } from '..'
import { NpForm } from '..'

const formValue = ref({})
const formProps = reactive<NpFormProps>({
  labelWidth: 100,
  items: [
    {
      path: 'input',
      label: '输入框',
      component: 'NInput',
    },
    {
      path: 'slot',
      label: '插槽 1',
      // 优先级低于插槽
      component: 'NSelect',
    },
    {
      slot: 'slot2',
      label: '插槽 2',
    },
  ],
})
</script>

<template>
  <NpForm
    v-bind="formProps"
    v-model:value="formValue"
  >
    <template #item-slot="{ path, value }">
      <NInputNumber v-model:value="value[path]" />
    </template>
    <template #item-slot2>
      <NButton type="primary">
        提交
      </NButton>
    </template>
  </NpForm>
  <pre>{{ formValue }}</pre>
</template>
