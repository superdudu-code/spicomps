import { Comment, Fragment, Text, cloneVNode, defineComponent, h } from 'vue'
import type { VNode } from 'vue'

const NAME = 'SpTrigger'
const OnlyChild = defineComponent({
  name: NAME,
  setup(_, { slots, attrs }) {
    return () => {
      const defaultSlot = slots.default?.(attrs)
      if (!defaultSlot) return null

      if (defaultSlot.length > 1) {
        console.warn(NAME, 'requires exact only one valid child.')
        return null
      }

      const firstLegitNode = findFirstLegitChild(defaultSlot)
      if (!firstLegitNode) {
        console.warn(NAME, 'no valid child node found')
        return null
      }

      return cloneVNode(firstLegitNode, attrs)
    }
  },
})

export default OnlyChild

function findFirstLegitChild(node: VNode[] | undefined): VNode | null {
  if (!node) return null
  const children = node
  for (const child of children) {
    /**
     * when user uses h(Fragment, [text]) to render plain string,
     * this switch case just cannot handle, when the value is primitives
     * we should just return the wrapped string
     */
    // if (isObject(child)) {
    switch (child.type) {
      case Comment:
        continue
      case Text:
      case 'svg':
        return wrapTextContent(child)
      case Fragment:
        return findFirstLegitChild(child.children as VNode[])
      default:
        return child
    }
    // return wrapTextContent(child)
  }
  return null
}

function wrapTextContent(s: string | VNode) {
  // const ns = useNamespace('only-child')
  return h('span', s)
}
