---
title: 'Input | Spicomps'
description: 'Input'
---

# Input 输入框

输入字符

## 基础用法

<preview path="../demos/input/basic.vue"  />

## 禁用状态

`disabled: true`

<preview path="../demos/input/disabled.vue" />

## 一键清除

`clearable: true`

<preview path="../demos/input/clearable.vue" />

## 密码框

通过`show-password`可以切换密码显示

<preview path="../demos/input/password.vue" />

## 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。
使用 `size` 属性额外配置尺寸，可使用 `large`和`small`两种值。

<preview path="../demos/input/size.vue" />

## API

| 属性名        | 说明                | 类型                                  | 默认值 |
| ------------- | ------------------- | ------------------------------------- | ------ |
| size          | 大小                | `'large'\| 'small'`                   | —      |
| type          | 类型                | `'input' \| 'password' \| 'textarea'` | input  |
| show-password | 是否显示密码        | `boolean`                             | false  |
| loading       | 加载中状态          | `boolean`                             | false  |
| disabled      | 禁用                | `boolean`                             | false  |
| clearable     | 清除                | `boolean`                             | false  |
| autofocus     | 原生 autofocus 属性 | `boolean`                             | false  |
