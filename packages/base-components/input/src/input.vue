<template>
  <div :class="ns.b()">
    <template v-if="type !== 'textarea'">
      <div v-if="$slots.prepend" :class="ns.e('prepend')">
        <slot name="prepend" />
      </div>
      <div :class="ns.e('wrapper')">
        <span v-if="$slots.prefix" :class="ns.e('prefix')">
          <slot name="prefix" />
        </span>
        <input
          ref="input"
          :class="ns.e('inner')"
          :type="type"
          @input="handleInput"
          @compositionstart="handleCompositionStart"
          @compositionupdate="handleCompositionUpdate"
          @compositionend="handleCompositionEnd"
        />
        <span v-if="$slots.suffix" :class="ns.e('suffix')">
          <slot name="suffix" />
        </span>
      </div>
      <div v-if="$slots.append" :class="ns.e('append')">
        <slot name="append" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref, shallowRef } from 'vue'
import { useNamespace } from '@spicomps/hooks'
import { UPDATE_MODEL_EVENT } from '@spicomps/constants'
import { inputEmits, inputProps } from './types'

defineOptions({
  name: 'SpInput',
})

const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)

const ns = useNamespace('input')

const input = shallowRef<HTMLInputElement>()
const _ref = computed(() => input.value)

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

const isComposing = ref(false)
const handleInput = async (event: Event) => {
  if (isComposing.value) return

  const { value } = event.target as HTMLInputElement
  // 发射 v-model 的 update:modelValue 监听事件
  emit(UPDATE_MODEL_EVENT, value)
  await nextTick()
  // 等待 DOM 更新后设置 input 表单的值
  setNativeInputValue()
}

/**
 * 中文输入的时候，会触发input事件，所以用一个变量来判断是否是中文输入
 */
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
</script>
