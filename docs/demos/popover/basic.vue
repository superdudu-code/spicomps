<template>
  <sp-popover trigger="hover" content="欲穷千里目，更上一层楼">
    <template #reference>
      <sp-button>hover</sp-button>
    </template>
  </sp-popover>
  <sp-popover trigger="click" content="欲穷千里目，更上一层楼">
    欲穷千里目，更上一层楼
    <template #reference>
      <sp-button>click</sp-button>
    </template>
  </sp-popover>
  <sp-popover
    :visible="visible"
    trigger="hover"
    content="受控情况下，可以通过监听 clickoutside 判断是否点击外部元素"
  >
    <template #reference>
      <sp-button @click="visible = !visible"
        >受控：{{ !visible ? '关闭中' : '展开中' }}</sp-button
      >
    </template>
  </sp-popover>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
</script>
