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


## API

| Name        | Description                            | Type                                                    | Default   |
| ----------- | -------------------------------------- | ------------------------------------------------------- | --------- |
| size        | button size                            | `'large'\| 'small'`                                     | —         |
| type        | button type                            | `'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'` | `primary` |
| plain       | determine whether it's a plain button  | `boolean`                                               | false     |
| round       | determine whether it's a round button  | `boolean`                                               | false     |
| circle      | determine whether it's a circle button | `boolean`                                               | false     |
| loading     | determine whether it's loading         | `boolean`                                               | false     |
| disabled    | disable the button                     | `boolean`                                               | false     |
| icon        | icon component                         | `string`                                                | —         |
| autofocus   | same as native button's `autofocus`    | `boolean`                                               | false     |
| native-type | same as native button's `type`         | `'button'\| 'submit'\| 'reset'`                         | button    |
