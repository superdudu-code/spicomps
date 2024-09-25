<template>
  <div class="demo-container">
    <sp-input v-model="inputValue" disabled />
  </div>

  <div class="demo-container">
    <sp-input v-model="inputValue" type="textarea" disabled />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const inputValue = ref('adsadsa')
</script>

<style>
.demo-container {
  margin: 10px;
}
</style>
