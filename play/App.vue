<template>
  <!-- If you want to apply a custom namespace, uncomment the following and apply the css configuration in `vite.config.ts`. -->
  <!-- <el-config-provider namespace="ep"> -->
  <div class="play-container">
    <SpConfigProvider :theme="theme">
      <sp-button type="primary" size="large" round>large</sp-button>
      <sp-button type="primary" size="default" round>default</sp-button>
      <sp-button type="primary" >default</sp-button>
      <sp-button type="primary" size="small" round>small</sp-button>
    </SpConfigProvider>
  </div>
</template>

<script setup lang="ts">
import { SpButton, SpConfigProvider } from '@spicomps/base-components'
import { computed, ref } from 'vue'
// code here

const themeColor = ref('#409EFF')
const theme = computed(() => {
  return {
    colorTheme: {
      primaryColor: themeColor.value,
      // primaryColorSuppl: themeColor,
      // primaryColorHover: themeColor,
      // primaryColorPressed: themeColor
    },
  }
})
</script>

<style lang="scss">
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;

  #play {
    height: 100%;
    width: 100%;

    .play-container {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
