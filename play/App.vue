<template>
  <!-- If you want to apply a custom namespace, uncomment the following and apply the css configuration in `vite.config.ts`. -->
  <!-- <el-config-provider namespace="ep"> -->
  <div class="play-container">
    <SpConfigProvider :theme="theme">
      <sp-button type="primary" size="large" round>large</sp-button>
      <sp-button type="primary" size="default" round>default</sp-button>
      <sp-button type="primary">default</sp-button>
      <sp-button type="primary" size="small" round>small</sp-button>
      <sp-button type="primary" size="large">test</sp-button>
      <sp-button loading type="primary" size="large">test</sp-button>
      <sp-button icon="check" type="primary" size="large">test</sp-button>
    </SpConfigProvider>

    <sp-icon icon="check" type="primary"></sp-icon>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
library.add(faCheck)
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
