<template>
  <div :class="classList">
    <template v-if="type !== 'textarea'">
      <div v-if="$slots.prepend" :class="nsInput.e('prepend')">
        <slot name="prepend" />
      </div>
      <div
        ref="wrapperRef"
        :class="[nsInput.e('wrapper'), nsInput.is('focus', isFocused)]"
      >
        <span v-if="$slots.prefix" :class="nsInput.e('prefix')">
          <slot name="prefix" />
        </span>
        <input
          ref="input"
          :class="nsInput.e('inner')"
          :type="inputType"
          :disabled="disabled"
          :placeholder="placeholder"
          @input="handleInput"
          @compositionstart="handleCompositionStart"
          @compositionupdate="handleCompositionUpdate"
          @compositionend="handleCompositionEnd"
          @focus="handleFocus"
          @blur="handleBlur"
        />
        <transition :name="`${nsInput.namespace.value}-fade-in-scale-up`">
          <span v-if="isShowClear" :class="nsInput.e('clear')">
            <sp-icon icon="circle-xmark" @click="handleClear" />
          </span>
        </transition>
        <span v-if="showPasswordIcon" :class="nsInput.e('password')">
          <sp-icon
            :icon="isShowPassword ? 'eye-slash' : 'eye'"
            @click="handleShowPassword"
          />
        </span>
        <span v-if="$slots.suffix" :class="nsInput.e('suffix')">
          <slot name="suffix" />
        </span>
      </div>
      <div v-if="$slots.append" :class="nsInput.e('append')">
        <slot name="append" />
      </div>
    </template>
    <template v-else>
      <div
        ref="wrapperRef"
        :class="[nsTextarea.e('wrapper'), nsInput.is('focus', isFocused)]"
      >
        <textarea
          ref="textarea"
          :class="nsTextarea.e('inner')"
          :disabled="disabled"
          :placeholder="placeholder"
          @input="handleInput"
          @compositionstart="handleCompositionStart"
          @compositionupdate="handleCompositionUpdate"
          @compositionend="handleCompositionEnd"
          @focus="handleFocus"
          @blur="handleBlur"
        />
        <transition :name="`${nsInput.namespace.value}-fade-in-scale-up`">
          <span v-if="isShowClear" :class="nsTextarea.e('clear')">
            <sp-icon icon="circle-xmark" @click="handleClear" />
          </span>
        </transition>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref, shallowRef, watch } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCircleXmark,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons'
import { useNamespace } from '@spicomps/hooks'
import { UPDATE_MODEL_EVENT } from '@spicomps/constants'
import { inputEmits, inputProps } from './types'
import {
  useInputClear,
  useInputComposing,
  useInputFocus,
  useInputPassword,
} from './useInput'
library.add(faCircleXmark, faEyeSlash, faEye)

defineOptions({
  name: 'SpInput',
})

const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)

const nsInput = useNamespace('input')
const nsTextarea = useNamespace('textarea')

const classList = computed(() => [
  props.type === 'textarea' ? nsTextarea.b() : nsInput.b(),
  nsInput.is('disabled', props.disabled),
  nsInput.is('clearable', props.clearable),
  nsInput.m(props.size),
])

const input = shallowRef<HTMLInputElement>()
const textarea = shallowRef<HTMLTextAreaElement>()
const _ref = computed(() => input.value || textarea.value)

// 本地值
const nativeInputValue = computed(() =>
  props.modelValue ? String(props.modelValue) : ''
)
// 设置本地值
const setNativeInputValue = () => {
  const input = _ref.value

  if (!input || input.value === nativeInputValue.value) return
  // 设置input元素的值
  input.value = nativeInputValue.value
}

onMounted(() => {
  setNativeInputValue()
})
watch(nativeInputValue, () => setNativeInputValue())

// 中文输入
const {
  isComposing,
  handleCompositionStart,
  handleCompositionUpdate,
  handleCompositionEnd,
} = useInputComposing(handleInput, emit)

// 输入监听
async function handleInput(event: Event) {
  if (isComposing.value) return

  const { value } = event.target as HTMLInputElement
  // 发射 v-model 的 update:modelValue 监听事件
  emit(UPDATE_MODEL_EVENT, value)
  emit('change', value)
  await nextTick()
  // 等待 DOM 更新后设置 input 表单的值
  setNativeInputValue()
}

// 焦点
const { wrapperRef, isFocused, handleFocus, handleBlur } = useInputFocus(
  _ref,
  emit
)

// 清除
const { isShowClear, handleClear } = useInputClear(
  props,
  emit,
  nativeInputValue,
  isFocused
)

// 密码切换
const { isShowPassword, showPasswordIcon, inputType, handleShowPassword } =
  useInputPassword(props, nativeInputValue)
</script>
