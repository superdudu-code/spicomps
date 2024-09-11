<template>
  <button :class="buttonClass">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@spicomps/hooks'
import { useButton } from './use-button'
import type { ButtonEmits, ButtonProps } from './types'
const ns = useNamespace('button')

const props = withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
})
const emit = defineEmits<{
  (e: 'click', values: MouseEvent): void
}>()

const { _disabled } = useButton(props, emit)
const buttonClass = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.m(props.size),
  ns.is('disabled', _disabled.value),
  ns.is('loading', props.loading),
  ns.is('plain', props.plain),
  ns.is('round', props.round),
  ns.is('circle', props.circle),
  ns.is('text', props.text),
  // ns.is('link', props.link),
])
</script>
