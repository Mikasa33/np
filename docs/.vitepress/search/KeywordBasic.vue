<script setup lang="ts">
import { ref } from 'vue'
import { NpSearchKeyword } from '..'

const keyword = ref<string | number | null>(null)
function handleSearch(value: any) {
  keyword.value = value
}
</script>

<template>
  <NpSearchKeyword @search="handleSearch" />
  <pre>关键词：{{ keyword }}</pre>
</template>
