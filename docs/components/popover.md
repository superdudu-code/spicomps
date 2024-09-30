---
title: 'Popover | Spicomps'
description: 'Popover'
---

# Popover 弹出框

Popover 在内容周围弹出一些隐藏的信息。Popover 里面没什么内置样式，在里面填什么主要靠你了。

## 基础用法

<preview path="../demos/popover/basic.vue"  />

## 位置

<preview path="../demos/popover/placement.vue" />

## 延迟

openDelay 延迟显示（在多个 popover 下很好用），closeDelay 延迟关闭
<preview path="../demos/popover/delay.vue" />

## 不要箭头

<preview path="../demos/popover/arrow.vue" />

## 宽度

<preview path="../demos/popover/width.vue" />

## 自定义动画

<preview path="../demos/popover/transition.vue" />

## API

| 属性名     | 说明                   | 类型                             | 默认值                  |
| ---------- | ---------------------- | -------------------------------- | ----------------------- |
| trigger    | 触发方式               | `'hover' \| 'click' \| 'manual'` | `'click'`               |
| content    | 内容，插槽优先         | `string`                         | —                       |
| disabled   | 禁止弹窗               | `boolean`                        | `false`                 |
| visible    | 受控显示               | `boolean \| null`                | `null`                  |
| placement  | 显示位置               | `Placement`                      | `'bottom'`              |
| strategy   | 弹窗定位方式           | `Strategy`                       | `'absolute'`            |
| effect     | 主题                   | `'dark' \| 'light'`              | `'light'`               |
| offset     | 浮层偏移量             | `number`                         | `8`                     |
| showArrow  | 是否显示箭头           | `boolean`                        | `true`                  |
| maxWidth   | 最大宽度，CSS 值       | `number \| string`               | —                       |
| minWidth   | 最小宽度，CSS 值       | `number \| string`               | —                       |
| width      | 宽度，CSS 值           | `number \| string`               | —                       |
| transition | 动画名                 | `string`                         | `'sp-fade-in-scale-up'` |
| closeDelay | 关闭延迟               | `number`                         | `150`                   |
| openDelay  | 打开延迟               | `number`                         | `0`                     |
| zIndex     | zIndex 值              | `number`                         | `null`                  |
| autoUpdate | 是否自动更新弹窗位置， | `AutoUpdateOptions  \| boolean`  | `false`                 |

### AutoUpdateOptions

1. `ancestorResize` 当溢出祖先元素的大小调整时是否更新位置
2. `elementResize` 当参考元素或浮动元素调整大小时是否更新位置
3. `layoutShift` 如果由于布局偏移而导致参考元素在屏幕上移动，是否更新浮动元素的位置。
4. `animationFrame` 是否在需要时在每个动画帧上更新浮动元素的位置。虽然已针对性能进行了优化，但在以下情况下应谨慎使用

## 插槽

| 插槽名    | 说明                     |
| --------- | ------------------------ |
| reference | 触发元素，请使用一个元素 |
| default   | 弹窗内容                 |

## 事件

| 事件名         | 说明               | 参数    |
| -------------- | ------------------ | ------- |
| update:visible | 修改显示状态时触发 | boolean |
| clickoutside   | 点击外部区域触发   |         |
| before-enter   | 显示前触发         |         |
| after-enter    | 显示后触发         |         |
| before-leave   | 消失前触发         |         |
| after-leave    | 消失后触发         |         |
