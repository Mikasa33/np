<script lang="ts" setup>
import { NFlex } from 'naive-ui'
import { NpViewTag } from '..'

const value = 'male'
const options = [
  { label: '男 male', value: 'male' },
  { label: '女 female', value: 'female' },
]
</script>

<template>
  <NFlex>
    <NpViewTag
      :value
      :options
      round
      type="success"
    />
    <NpViewTag :value />
  </NFlex>
</template>
