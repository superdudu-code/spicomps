import { computed, ref } from 'vue'

const zIndex = ref(0)
export function useZIndex(initialValue = 2000) {
  const currentZIndex = computed(() => zIndex.value + initialValue)
  const nextZIndex = () => {
    zIndex.value++
    return currentZIndex.value
  }
  return { currentZIndex, nextZIndex }
}
