<template>
  <button
    ref="_ref"
    :class="buttonClass"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
    @click="handleClick"
  >
    <sp-icon v-if="loading" icon="spinner" spin />
    <sp-icon v-else-if="icon" :icon="icon" />
    <div>
      <slot />
    </div>
    <slot name="icon" />
  </button>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useNamespace } from '@spicomps/hooks'
import { SpIcon } from '@spicomps/base-components/icon'
import { useButton } from './use-button'
import { buttonEmits, buttonProps } from './types'

library.add(faSpinner)

defineOptions({
  name: 'SpButton',
})
const ns = useNamespace('button')

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

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

const _ref = ref<HTMLButtonElement>()

defineExpose({
  ref: _ref,
})
</script>
