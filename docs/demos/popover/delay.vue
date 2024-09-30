<template>
  <sp-popover
    content="白日依山尽，黄河入海流。欲穷千里目，更上一层楼。"
    :open-delay="500"
    :close-delay="500"
    trigger="hover"
  >
    <template #reference>
      <sp-button>500ms后打开，500ms后关闭</sp-button>
    </template>
  </sp-popover>
</template>
