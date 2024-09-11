import { computed } from 'vue'
import type { ButtonEmits, ButtonProps } from './types'

export const useButton = (props: ButtonProps, emit: ButtonEmits) => {
  const _disabled = computed(() => {
    return props.disabled || props.loading
  })
  return { _disabled }
}
