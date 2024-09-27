import type { EmitFn, ExtractPropTypes, PropType } from 'vue'
import type Elipsis from './elipsis.vue'

export type ElipsisType = 'end' | 'start' | 'middle'

export const elipsisProps = {
  // 是否收缩
  elipsis: Boolean,
  // 内容文字
  text: {
    type: String,
    default: '',
  },
  // 最大行数
  maxLines: {
    type: Number,
    default: 1,
  },
  // 省略位置
  position: {
    type: String as PropType<ElipsisType>,
    default: 'end',
  },
  // 行高
  lineHeight: {
    type: Number,
  },
} as const

export type ElipsisProps = ExtractPropTypes<typeof elipsisProps>

// emit
export const elipsisEmits = {
  'update:elipsis': (value: boolean) => typeof value === 'boolean',
}
export type ElipsisEmits = EmitFn<typeof elipsisEmits>

export type ElipsisInstance = InstanceType<typeof Elipsis>
