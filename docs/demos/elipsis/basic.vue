<template>
  <div class="demo-container">
    <el-switch
      v-model="isElipsis"
      inline-prompt
      active-text="省略"
      inactive-text="不省略"
    />
    <el-slider v-model="width" :min="100" :max="500" />
  </div>
  <div class="demo-container" :style="`width: ${width}px`">
    <sp-elipsis :text="text" :elipsis="isElipsis" />
  </div>
  <div class="demo-container" :style="`width: ${width}px`">
    <sp-elipsis :text="text" :elipsis="isElipsis" :max-lines="2" />
  </div>
  <div class="demo-container" :style="`width: ${width}px`">
    <sp-elipsis :text="text" :elipsis="isElipsis" :max-lines="3" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isElipsis = ref(true)
const width = ref(230)
const text = ref(
  '怅卧新春白袷衣，白门寥落意多违。红楼隔雨相望冷，珠箔飘灯独自归。远路应悲春晼晚，残宵犹得梦依稀。玉珰缄札何由达，万里云罗一雁飞。'
)
</script>

<style>
.demo-container {
  margin-bottom: 10px;
}
</style>
