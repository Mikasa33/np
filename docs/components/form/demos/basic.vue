<script setup lang="ts">
import { NpForm } from '@rezero/np'
import { NButton, NCard, NFlex, NInput, NSelect } from 'naive-ui'
import { markRaw, ref } from 'vue'

const formRef = ref()
const formModel = ref({
  textarea: 'model default value',
})
const formOptions = ['groode', 'veli good', 'emazing', 'lidiculous'].map(
  v => ({
    label: v,
    value: v,
  }),
)
const formProps = ref({
  labelWidth: 100,
  rules: {
    input: { required: true, message: '请输入 input', trigger: ['blur', 'input'] },
    textarea: { required: true, message: '请输入 textarea', trigger: ['blur', 'input'] },
    select: { required: true, message: '请选择 select', trigger: ['blur', 'change'] },
  },
  items: [
    {
      path: 'input',
      label: 'Input',
      component: 'NInput',
      defaultValue: 'item default value',
    },
    {
      path: 'textarea',
      label: 'Textarea',
      component: markRaw(NInput),
      props: {
        type: 'textarea',
      },
    },
    {
      path: 'select',
      label: 'Select',
      component: markRaw(NSelect),
      props: {
        options: formOptions,
      },
    },
    {
      path: 'slot',
      label: 'Slot',
    },
  ],
})
</script>

<template>
  <NpForm
    ref="formRef"
    v-bind="formProps"
    v-model:model="formModel"
  >
    <template #item-slot>
      <NCard :theme-overrides="{ borderColor: '#E0E0E6' }">
        slot content
      </NCard>
    </template>
  </NpForm>
  <NFlex justify="end">
    <NButton @click="formRef.reset()">
      重置数据
    </NButton>
    <NButton @click="formRef.restoreValidation()">
      清空验证
    </NButton>
    <NButton
      type="primary"
      @click="formRef.validate()"
    >
      验证
    </NButton>
  </NFlex>
  <pre>{{ formModel }}</pre>
</template>
