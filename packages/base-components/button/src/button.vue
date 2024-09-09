<template>
  <button :class="bem.b()">测试按钮</button>
</template>

<script lang="ts" setup>
import { useNamespace } from '@spicomps/hooks'
const bem = useNamespace('button')
</script>
