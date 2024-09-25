<template>
  <div class="demo-container">
    <sp-input v-model="inputValue" size="large" placeholder="彦祖，吃了没" />
  </div>
  <div class="demo-container">
    <sp-input v-model="inputValue" placeholder="走，一起" />
  </div>
  <div class="demo-container">
    <sp-input v-model="inputValue" size="small" placeholder="走，一起" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const inputValue = ref('')
</script>

<style>
.demo-container {
  margin: 10px;
}
</style>
