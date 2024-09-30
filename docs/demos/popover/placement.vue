<template>
  <div class="popover-placement-container top">
    <sp-popover placement="top-start" v-bind="bind">
      <template #reference>
        <sp-button>top-start</sp-button>
      </template>
    </sp-popover>
    <sp-popover placement="top" v-bind="bind">
      <template #reference>
        <sp-button>top</sp-button>
      </template>
    </sp-popover>
    <sp-popover placement="top-end" v-bind="bind">
      <template #reference>
        <sp-button>top-end</sp-button>
      </template>
    </sp-popover>
  </div>
  <div class="popover-placement-container start">
    <sp-popover placement="left-start" v-bind="bind">
      <template #reference>
        <sp-button>left-start</sp-button>
      </template>
    </sp-popover>
    <sp-popover placement="right-start" v-bind="bind">
      <template #reference>
        <sp-button>right-start</sp-button>
      </template>
    </sp-popover>
  </div>
  <div class="popover-placement-container start">
    <sp-popover placement="left" v-bind="bind">
      <template #reference>
        <sp-button>left</sp-button>
      </template>
    </sp-popover>
    <sp-popover placement="right" v-bind="bind">
      <template #reference>
        <sp-button>right</sp-button>
      </template>
    </sp-popover>
  </div>
  <div class="popover-placement-container start">
    <sp-popover placement="left-end" v-bind="bind">
      <template #reference>
        <sp-button>left-end</sp-button>
      </template>
    </sp-popover>
    <sp-popover placement="right-end" v-bind="bind">
      <template #reference>
        <sp-button>right-end</sp-button>
      </template>
    </sp-popover>
  </div>
  <div class="popover-placement-container top">
    <sp-popover placement="bottom-start" v-bind="bind">
      <template #reference>
        <sp-button>bottom-start</sp-button>
      </template>
    </sp-popover>
    <sp-popover placement="bottom" v-bind="bind">
      <template #reference>
        <sp-button>bottom</sp-button>
      </template>
    </sp-popover>
    <sp-popover placement="bottom-end" v-bind="bind">
      <template #reference>
        <sp-button>bottom-end</sp-button>
      </template>
    </sp-popover>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'

const bind = reactive({
  content: '白日依山尽，黄河入海流。欲穷千里目，更上一层楼。',
  trigger: 'hover',
  'max-width': '190px',
})
</script>

<style>
.popover-placement-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  &.top {
    justify-content: center;
  }
  &.start {
    justify-content: space-between;
  }
}
</style>
