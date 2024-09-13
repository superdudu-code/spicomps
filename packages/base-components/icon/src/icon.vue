<template>
  <i :class="iconClass" :style="customStyles" v-bind="$attrs">
    <slot>
      <FontAwesomeIcon v-bind="fontProps" />
    </slot>
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useNamespace } from '@spicomps/hooks'
import type { IconProps } from './type'
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'SpIcon',
  inheritAttrs: false,
})

const ns = useNamespace('icon')

const props = defineProps<IconProps>()

const iconClass = computed(() => [ns.b(), ns.m(props.type)])

const customStyles = computed(() => {
  const obj: CSSProperties = {}
  if (props.color) {
    obj['--color'] = props.color
  }
  return obj
})

const fontProps = computed(() => {
  const obj = { ...props }
  delete obj.type
  delete obj.color
  return obj
})
</script>
