<template>
  <!-- If you want to apply a custom namespace, uncomment the following and apply the css configuration in `vite.config.ts`. -->
  <!-- <el-config-provider namespace="ep"> -->
  <div class="play-container">
    <SpConfig :theme="theme">
      <sp-button type="primary" size="large">test</sp-button>
    </SpConfig>
  </div>
</template>

<script setup lang="ts">
import SpButton from '@spicomps/base-components/button'
import SpConfig from '@spicomps/base-components/config-provider'
import { computed, ref } from 'vue'
// code here

const themeColor = ref('#409EFF')
const theme = computed(() => {
  return {
    common: {
      primaryColor: themeColor.value,
      // primaryColorSuppl: themeColor,
      // primaryColorHover: themeColor,
      // primaryColorPressed: themeColor
    },
    // LoadingBar: {
    //   colorLoading: appStore.themeColor
    // }
  }
})

setTimeout(() => {
  themeColor.value = '#A848FF'
}, 2000)
setTimeout(() => {
  themeColor.value = '#FFA848'
}, 4000)
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
