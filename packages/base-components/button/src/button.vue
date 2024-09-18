<template>
  <button :class="buttonClass" @click="handleClick">
    <sp-icon v-if="loading" icon="spinner" spin />
    <sp-icon v-else-if="icon" :icon="icon" />
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@spicomps/hooks'
import { SpIcon } from '@spicomps/base-components/icon'
import { useButton } from './use-button'
import { buttonProps } from './types'

defineOptions({
  name: 'SpButton',
})
const ns = useNamespace('button')

const props = defineProps(buttonProps)
const emit = defineEmits<{
  click: [value: MouseEvent]
}>()

const { _disabled, handleClick } = useButton(props, emit)
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
