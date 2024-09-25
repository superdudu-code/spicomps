import { ShallowRef, computed, ref, shallowRef } from 'vue'
import { useEventListener } from '@vueuse/core'
import { UPDATE_MODEL_EVENT } from '@spicomps/constants'
import type { ComputedRef, Ref } from 'vue'
import type { InputEmits, InputProps } from './types'

/**
 * 中文输入的时候，会触发input事件，所以用一个变量来判断是否是中文输入
 */
export function useInputComposing(
  handleInput: (event: Event) => any,
  emit: InputEmits
) {
  const isComposing = ref(false)

  // 中文输入开始
  const handleCompositionStart = (event: CompositionEvent) => {
    emit('compositionstart', event)
    isComposing.value = true
  }
  // 中文输入更新
  const handleCompositionUpdate = (event: CompositionEvent) => {
    emit('compositionupdate', event)
  }
  // 中文输入结束，此时再次触发input事件
  const handleCompositionEnd = (event: CompositionEvent) => {
    emit('compositionend', event)
    if (isComposing.value) {
      isComposing.value = false
      handleInput(event)
    }
  }

  return {
    isComposing,
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd,
  }
}

/**
 * 焦点事件
 */
export function useInputFocus(
  target: ComputedRef<HTMLInputElement | HTMLTextAreaElement | undefined>,
  emit: InputEmits
) {
  const isFocused = ref(false)
  const handleFocus = (event: FocusEvent) => {
    if (isFocused.value) return

    isFocused.value = true
    emit('focus', event)
  }

  const handleBlur = (event: FocusEvent) => {
    if (!isFocused.value) return

    isFocused.value = false
    emit('blur', event)
  }

  // input类型，点击wrapper获取焦点
  const wrapperRef = shallowRef<HTMLElement>()
  const handleWrapperClick = () => {
    target.value?.focus()
  }

  useEventListener(wrapperRef, 'click', handleWrapperClick)

  return {
    wrapperRef,
    isFocused,
    handleFocus,
    handleBlur,
  }
}

/**
 * 清除
 */
export function useInputClear(
  props: InputProps,
  emit: InputEmits,
  nativeInputValue: ComputedRef<string>,
  isFocused: Ref<boolean>
) {
  const isShowClear = computed(() => {
    return (
      props.clearable &&
      !props.disabled &&
      !!nativeInputValue.value &&
      isFocused.value
    )
  })

  const handleClear = () => {
    emit(UPDATE_MODEL_EVENT, '')
    emit('change', '')
    emit('clear')
  }

  return { isShowClear, handleClear }
}

/**
 * 密码切换
 */
export function useInputPassword(
  props: InputProps,
  nativeInputValue: ComputedRef<string>
) {
  const isShowPassword = ref(false) // 是否显示密码
  // 是否显示密码图标
  const showPasswordIcon = computed(() => {
    return props.showPassword && !props.disabled && !!nativeInputValue.value
  })
  // 输入框类型
  const inputType = computed(() => {
    if (props.type === 'password') {
      if (isShowPassword.value) return 'text'
      return 'password'
    }
    return props.type
  })
  // 点击显示切换密码显示
  function handleShowPassword() {
    isShowPassword.value = !isShowPassword.value
  }

  return { isShowPassword, showPasswordIcon, inputType, handleShowPassword }
}
