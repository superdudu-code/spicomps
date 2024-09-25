import { UPDATE_MODEL_EVENT } from '@spicomps/constants'
import type { ComponentSize } from '@spicomps/constants'
import type { EmitFn, ExtractPropTypes, PropType } from 'vue'
import type Input from './input.vue'

// props
export const inputProps = {
  modelValue: {
    type: String,
  },
  type: {
    type: String,
    default: 'text',
  },
  size: String as PropType<ComponentSize>,
  disabled: Boolean,
  placeholder: String,
  clearable: Boolean,
  showPassword: Boolean,
} as const
export type InputProps = ExtractPropTypes<typeof inputProps>

// emit
export const inputEmits = {
  [UPDATE_MODEL_EVENT]: (value: string) => typeof value === 'string',
  change: (value: string) => typeof value === 'string',
  clear: () => true,
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  compositionstart: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionupdate: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionend: (evt: CompositionEvent) => evt instanceof CompositionEvent,
}
export type InputEmits = EmitFn<typeof inputEmits>

// instance
export type InputInstance = InstanceType<typeof Input>
