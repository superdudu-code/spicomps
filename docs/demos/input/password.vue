<template>
  <div class="demo-container">
    <sp-input
      v-model="inputValue"
      type="password"
      show-password
      placeholder="密码框"
      clearable
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const inputValue = ref('')
</script>
