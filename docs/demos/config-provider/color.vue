<template>
  <sp-config-provider :theme="theme">
    <div class="demo-container">
      <sp-button type="primary" size="large">test</sp-button>
      <sp-button type="warning" size="large">test</sp-button>
      <sp-button type="success" size="large">test</sp-button>
      <sp-button type="danger" size="large">test</sp-button>
      <sp-button type="info" size="large">test</sp-button>
    </div>
    <sp-button @click="handleChangeColorTheme">切换颜色主题</sp-button>
  </sp-config-provider>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
const themeColor = ref({
  primaryColor: '#409EFF',
  warningColor: '#e6a23c',
  successColor: '#67c23a',
  dangerColor: '#f56c6c',
  infoColor: '#909399',
})
const theme = computed(() => {
  return {
    colorTheme: {
      ...themeColor.value,
    },
  }
})

const handleChangeColorTheme = () => {
  if (themeColor.value.primaryColor === '#409EFF') {
    themeColor.value = {
      primaryColor: '#18a058',
      warningColor: '#f0a020',
      successColor: '#18a058',
      dangerColor: '#d03050',
      infoColor: '#2080f0',
    }
  } else {
    themeColor.value = {
      primaryColor: '#409EFF',
      warningColor: '#e6a23c',
      successColor: '#67c23a',
      dangerColor: '#f56c6c',
      infoColor: '#909399',
    }
  }
}
</script>

<style>
.demo-container {
  margin: 10px;
}
</style>
