<script setup lang="ts">
import type { AdvFormProps } from '@mikasa33/np'
import { NpAdvForm } from '@mikasa33/np'
import { nextTick, ref } from 'vue'
import { NButton, NFlex } from 'naive-ui'

const show = ref(false)
const value = ref({})
const preset = ref('')
const formOptions = ['groode', 'veli good', 'emazing', 'lidiculous'].map(
  v => ({
    label: v,
    value: v,
  }),
)
const advFormProps: AdvFormProps = {
  title: '表单标题',
  items: [
    {
      path: 'input',
      label: '输入框',
      component: 'NInput',
      defaultValue: '输入框默认值',
    },
    {
      path: 'textarea',
      label: '多行文本框',
      component: 'NInput',
      componentProps: {
        type: 'textarea',
      },
    },
    {
      path: 'select',
      label: '下拉框',
      component: 'NSelect',
      componentProps: {
        options: formOptions,
      },
    },
  ],
  labelPlacement: 'left',
  labelWidth: 100,
  rules: {
    input: { required: true, message: '请输入输入框值', trigger: ['blur', 'input'] },
    textarea: { required: true, message: '请输入多行文本框值', trigger: ['blur', 'input'] },
    select: { required: true, message: '请选择下拉框值', trigger: ['blur', 'change'] },
  },
}

async function handleOpen(type: 'drawer' | 'modal') {
  preset.value = type
  await nextTick()
  show.value = true
}

function handleConfirm(value: Record<string, any>) {
  console.log(value)
  show.value = false
}
</script>

<template>
  <NpAdvForm
    v-bind="advFormProps"
    v-model:show="show"
    v-model:value="value"
    :preset
    @confirm="handleConfirm"
  />
  <NFlex>
    <NButton @click="handleOpen('drawer')">
      打开抽屉表单
    </NButton>
    <NButton @click="handleOpen('modal')">
      打开模态窗表单
    </NButton>
  </NFlex>
</template>
