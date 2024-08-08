<script setup lang="ts">
import type { NpFormProps } from '@rezero/np'
import { NpForm } from '@rezero/np'
import { NButton, NFlex, NInput, NSelect } from 'naive-ui'
import { markRaw, reactive, ref } from 'vue'

const formRef = ref()
const formModel = ref({})
const formOptions = ['groode', 'veli good', 'emazing', 'lidiculous'].map(
  v => ({
    label: v,
    value: v,
  }),
)
const formProps = reactive<NpFormProps>({
  inline: true,
  labelWidth: 100,
  rules: {
    input: { required: true, message: '请输入输入框值', trigger: ['blur', 'input'] },
    textarea: { required: true, message: '请输入多行文本框值', trigger: ['blur', 'input'] },
    select: { required: true, message: '请选择下拉框值', trigger: ['blur', 'change'] },
  },
  items: [
    {
      path: 'input',
      label: '输入框',
      component: 'NInput',
    },
    {
      path: 'textarea',
      label: '多行文本框',
      component: markRaw(NInput),
      componentProps: {
        type: 'textarea',
      },
    },
    {
      path: 'select',
      label: '下拉框',
      component: markRaw(NSelect),
      componentProps: {
        options: formOptions,
      },
    },
  ],
})
</script>

<template>
  <NpForm
    ref="formRef"
    v-bind="formProps"
    v-model:model="formModel"
  />
  <NFlex justify="end">
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
