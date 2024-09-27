---
title: 'Elipsis | Spicomps'
description: 'Elipsis'
---

# Elipsis 文字缩略

输入字符

## 基础用法

`elipsis`指定是否缩略。`max-lines`指定缩略行数，默认 1

<preview path="../demos/elipsis/basic.vue"  />

## 省略位置

`position`可以设置省略位置，可选值：`end(默认)`、`middle`、`start`。

<preview path="../demos/elipsis/position.vue" />

## 插槽

插槽作用域抛出两个参数：`isOver` 是否溢出， `elipsis` 是否处于收缩状态

<preview path="../demos/elipsis/slot.vue" />

## API

| 属性名     | 说明           | 类型                     | 默认值 |
| ---------- | -------------- | ------------------------ | ------ |
| elipsis    | 是否收缩       | `boolean`                | false  |
| text       | 内容文字(必填) | `string`                 | input  |
| max-lines  | 最大行数       | `number`                 | 1      |
| position   | 省略位置       | `end \| start \| middle` | end    |
| lineHeight | 行高           | `string`                 | -      |

## 插槽

| 插槽名 | 说明 |
| ------ | ---- |
| prefix | 前缀 |
| suffix | 后缀 |
