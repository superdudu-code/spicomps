<template>
  <slot />
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useThemeChange } from '@spicomps/hooks/index'
import type { ConfigProviderProps } from './type'

const props = defineProps<ConfigProviderProps>()

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
