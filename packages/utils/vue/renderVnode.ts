import { type PropType, defineComponent, h } from 'vue'

/**
 * 渲染 vnode
 */
export default defineComponent({
  name: 'RenderVnode',
  props: {
    vNode: {
      type: [String, Object, Function],
      required: true,
    },
  },
  setup(props) {
    if (typeof props.vNode === 'function') {
      return props.vNode
    }
    return () => props.vNode
  },
})
