<template>
  <div class="demo-container">
    <el-slider v-model="width" :min="100" :max="500" />
  </div>
  <div class="demo-container" :style="`width: ${width}px`">
    <sp-elipsis :text="text" :elipsis="isElipsis" :max-lines="3">
      <template #suffix="scope">
        <sp-button
          v-if="scope.isOver"
          size="small"
          text
          type="info"
          @click="isElipsis = !isElipsis"
          >{{ scope.elipsis ? '展开' : '收缩' }}</sp-button
        >
      </template>
    </sp-elipsis>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElSlider } from 'element-plus'
import 'element-plus/es/components/slider/style/css'

const isElipsis = ref(true)
const text = ref(
  '怅卧新春白袷衣，白门寥落意多违。红楼隔雨相望冷，珠箔飘灯独自归。远路应悲春晼晚，残宵犹得梦依稀。玉珰缄札何由达，万里云罗一雁飞。'
)
const width = ref(230)
</script>

<style>
.demo-container {
  width: 230px;
  margin-bottom: 10px;
  line-height: 1.5;
}
</style>
