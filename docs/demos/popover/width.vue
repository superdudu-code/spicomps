<template>
  <sp-popover
    max-width="100px"
    trigger="hover"
    content="欲穷千里目，更上一层楼"
  >
    <template #reference>
      <sp-button>最大宽度100px</sp-button>
    </template>
  </sp-popover>
  <sp-popover width="200px" trigger="hover" content="欲穷千里目，更上一层楼">
    欲穷千里目，更上一层楼
    <template #reference>
      <sp-button>宽度200px</sp-button>
    </template>
  </sp-popover>
  <sp-popover
    trigger="hover"
    min-width="300px"
    content="欲穷千里目，更上一层楼"
  >
    <template #reference>
      <sp-button>最小宽度300px</sp-button>
    </template>
  </sp-popover>
</template>
