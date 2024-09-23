import { UPDATE_MODEL_EVENT } from '@spicomps/constants'
import type { ExtractPropTypes } from 'vue'
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
} as const
export type InputProps = ExtractPropTypes<typeof inputProps>

// emit
export const inputEmits = {
  [UPDATE_MODEL_EVENT]: (value: string) => typeof value === 'string',
  compositionstart: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionupdate: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionend: (evt: CompositionEvent) => evt instanceof CompositionEvent,
}
export type InputEmits = typeof inputEmits

// instance
export type InputInstance = InstanceType<typeof Input>
