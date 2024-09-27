<template>
  <div class="demo-container">
    <sp-input v-model="inputValue" placeholder="彦祖，吃了没" clearable />
  </div>

  <div class="demo-container">
    <sp-input
      v-model="inputValue"
      type="textarea"
      placeholder="走，一起"
      clearable
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const inputValue = ref('啊！我要被清除掉啦！救命！help！！！')
</script>
