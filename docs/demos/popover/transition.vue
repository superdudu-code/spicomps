<template>
  <sp-popover
    width="190px"
    trigger="hover"
    content="白日依山尽，黄河入海流。欲穷千里目，更上一层楼。"
    transition="zoom-in-top"
  >
    <template #reference>
      <sp-button>自定义动画效果</sp-button>
    </template>
  </sp-popover>
</template>

<style>
.zoom-in-top-enter-active,
.zoom-in-top-leave-active {
  opacity: 1;
  transform: scaleY(1);
  transition: all 0.3s ease;
  transform-origin: center top;
}
.zoom-in-top-enter-from,
.zoom-in-top-leave-active {
  opacity: 0;
  transform: scaleY(0);
}
</style>
