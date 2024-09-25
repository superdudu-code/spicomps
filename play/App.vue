<template>
  <div class="play-container">
    <!-- <sp-button type="primary" size="large" round>large</sp-button>
    <sp-button type="primary" size="default" round>default</sp-button>
    <sp-button type="primary">default</sp-button>
    <sp-button type="primary" size="small" round>small</sp-button>
    <sp-button type="primary" size="large">test</sp-button>
    <sp-button loading type="primary" size="large">test</sp-button>
    <sp-button icon="check" type="primary">test</sp-button>

    <sp-icon icon="check" type="primary"></sp-icon> -->

    <sp-input
      v-model="inputValue"
      @update:modelValue="handleInput"
      style="width: 200px"
      clearable
      size="large"
      type="password"
      showPassword
    >
      <template #suffix>123</template>
    </sp-input>
    <br />
    <sp-input
      v-model="inputValue"
      type="textarea"
      @update:modelValue="handleInput"
      clearable
      style="width: 200px"
    ></sp-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
library.add(faCheck)

// code here

// const themeColor = ref('#409EFF')
// const theme = computed(() => {
//   return {
//     colorTheme: {
//       primaryColor: themeColor.value,
//       // primaryColorSuppl: themeColor,
//       // primaryColorHover: themeColor,
//       // primaryColorPressed: themeColor
//     },
//   }
// })

const inputValue = ref('adsadsa')
const handleInput = (value: string) => {
  console.log(value)
}
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
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
