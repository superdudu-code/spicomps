<template>
  <div class="demo-container">
    <sp-button type="primary" size="large" round>
      后置图标
      <template #icon>
        <sp-icon icon="check" />
      </template>
    </sp-button>
    <sp-button type="primary" size="large" round icon="check">
      前置图标
    </sp-button>
    <sp-button type="primary" size="large" round icon="check">
      前后置图标
      <template #icon>
        <sp-icon icon="check" />
      </template>
    </sp-button>
  </div>
</template>

<style>
.demo-container {
  margin: 10px;
}
</style>
