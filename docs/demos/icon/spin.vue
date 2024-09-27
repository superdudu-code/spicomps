<template>
  <div class="demo-container">
    <div>spin 和 pulse</div>
    <sp-icon icon="xmark" type="primary" spin />
    <sp-icon icon="xmark" type="primary" pulse />
  </div>

  <div class="demo-container">
    <div>flip : 水平或垂直翻转图标。</div>
    <sp-icon icon="image" type="primary" />
    <sp-icon icon="image" type="primary" flip="horizontal" />
    <sp-icon icon="image" type="primary" flip="vertical" />
  </div>

  <div class="demo-container">
    <div>rotation : 旋转图标（90°，180° 或 270°）。</div>
    <sp-icon icon="image" type="primary" />
    <sp-icon icon="image" type="primary" :rotation="90" />
  </div>

  <div class="demo-container">
    <div>transform : 对图标进行更加细粒度的变换，如缩放、移动等。</div>
    <sp-icon icon="image" type="primary" />
    <sp-icon icon="image" type="primary" transform="shrink-6" />
  </div>

  <div class="demo-container">
    <div>pull : 对图标进行更加细粒度的变换，如缩放、移动等。</div>
    <sp-icon icon="image" type="primary" pull="right" />
  </div>

  <div class="demo-container">
    <div>mask : 通过 mask 实现遮罩效果，叠加两个图标。</div>
    <sp-icon icon="xmark" type="primary" mask="image" />
  </div>
</template>

<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import { faImage, faXmark } from '@fortawesome/free-solid-svg-icons'
library.add(faXmark, faImage)
</script>

<style scoped>
.sp-icon {
  font-size: 20px;
  margin-right: 20px;
}
</style>
