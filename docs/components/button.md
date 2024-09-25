---
title: 'Button | Spicomps'
description: 'Button'
---

# Button 按钮

常见的操作按钮

## 基础用法

使用 `type`、`plain`、`round`、`circle`、`size` 属性来定义按钮的样式。

<preview path="../demos/button/basic.vue"  />

## 禁用状态

使用 `disabled: true` 定义按钮是否被禁用。

<preview path="../demos/button/disabled.vue" />

## 文字按钮

使用 `text: true` 设置按钮为链接按钮

<preview path="../demos/button/text.vue" />

## 圆角按钮

使用 `round: true` 设置按钮为链接按钮

<preview path="../demos/button/round.vue" />

## 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 `size` 属性额外配置尺寸，可使用 `large`和`small`两种值。

<preview path="../demos/button/size.vue" />

## 图标按钮

在按钮上使用图标，可以使用 `preIcon`前置 icon 、 `sufIcon`后置 icon 属性或插槽。

<preview path="../demos/button/icon.vue" />

## API

| 属性名      | 说明                  | 类型                                                          | 默认值 |
| ----------- | --------------------- | ------------------------------------------------------------- | ------ |
| size        | 大小                  | `'large'\| 'small'`                                           | —      |
| type        | 类型                  | `'' \| 'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'` | -      |
| plain       | 朴素按钮              | `boolean`                                                     | false  |
| round       | 圆角按钮              | `boolean`                                                     | false  |
| circle      | 圆形按钮              | `boolean`                                                     | false  |
| loading     | 加载中状态            | `boolean`                                                     | false  |
| disabled    | 禁用                  | `boolean`                                                     | false  |
| pre-icon    | 前置按钮              | `string`                                                      | —      |
| suf-icon    | 后置按钮              | `string`                                                      | —      |
| autofocus   | 原生 autofocus 属性   | `boolean`                                                     | false  |
| native-type | 原生 type 属性 `type` | `'button'\| 'submit'\| 'reset'`                               | button |
