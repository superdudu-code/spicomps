<template>
  <div class="play-container">
    <sp-popover
      placement="right-start"
      trigger="hover"
      max-width="300px"
      content="欲穷千里目，更上一层楼，欲穷千里目，更上一层楼，欲穷千里目，更上一层楼，欲穷千里目，更上一层楼"
    >
      <template #reference>
        <sp-button>right-start</sp-button>
      </template>
    </sp-popover>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
library.add(faCheck)

const visible = ref(false)
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
