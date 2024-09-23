<template>
  <slot />
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useThemeChange } from '@spicomps/hooks/index'
import { configProviderProps } from './types'

defineOptions({
  name: 'SpConfigProvider',
})

const props = defineProps(configProviderProps)

const theme = computed(() => props.theme)

watch(
  theme,
  (newValue) => {
    if (newValue) {
      useThemeChange(newValue)
    }
  },
  { immediate: true }
)
</script>
