<script setup lang="ts">
import { ref } from 'vue'
import { NpSearchKeyword } from '..'

const params = ref({
  value: null,
  field: null,
})
const searchProps = {
  fieldOptions: [
    { value: 'name', label: '姓名' },
    { value: 'age', label: '年龄' },
    { value: 'gender', label: '性别' },
  ],
}
</script>

<template>
  <NpSearchKeyword
    v-bind="searchProps"
    v-model:value="params.value"
    v-model:field="params.field"
  />
  <pre>{{ params }}</pre>
</template>
