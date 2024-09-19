<script setup lang="ts">
import { NpSearchKeyword } from '@mikasa33/np'
import { ref } from 'vue'

const keyword = ref<string | number | null>(null)
function handleSearch(value: any) {
  keyword.value = value
}
</script>

<template>
  <NpSearchKeyword @search="handleSearch" />
  <pre>关键词：{{ keyword }}</pre>
</template>
