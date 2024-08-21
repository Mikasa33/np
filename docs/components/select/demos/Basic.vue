<script lang="ts" setup>
import type { SelectProps } from '@mikasa33/np'
import { NpSelect } from '@mikasa33/np'
import type { SelectOption } from 'naive-ui'
import { ref } from 'vue'

const value = ref()
const selectProps: SelectProps = {
  onRequest: (): Promise<SelectOption[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            label: 'Drive My Car',
            value: 'song1',
          },
          {
            label: 'Norwegian Wood',
            value: 'song2',
          },
          {
            label: 'You Won\'t See',
            value: 'song3',
            disabled: true,
          },
        ])
      }, 1000)
    })
  },
}
</script>

<template>
  <NpSelect
    v-model:value="value"
    v-bind="selectProps"
  />
  <pre>已选值：{{ value }}</pre>
</template>
