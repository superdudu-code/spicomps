import { computed } from 'vue'
import type { ButtonEmits, ButtonProps } from './types'

export const useButton = (props: ButtonProps, emit: ButtonEmits) => {
  const _disabled = computed(() => {
    return props.disabled || props.loading
  })

  const handleClick = (evt: MouseEvent) => {
    if (_disabled.value || props.loading) {
      evt.stopPropagation()
      return
    }
    // if (props.nativeType === 'reset') {
    //   form?.resetFields()
    // }
    emit('click', evt)
  }

  return { _disabled, handleClick }
}
