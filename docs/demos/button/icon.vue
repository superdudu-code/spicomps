<template>
  <div class="demo-container">
    <span>属性：</span>
    <sp-button type="primary" pre-icon="check">前置图标</sp-button>
    <sp-button type="primary" suf-icon="check">后置图标</sp-button>
    <sp-button type="primary" pre-icon="check" suf-icon="check">
      前后置图标
    </sp-button>
  </div>
  <div class="demo-container">
    <span>插槽：</span>
    <sp-button type="primary">
      前置图标
      <template #preIcon>
        <sp-icon icon="check" />
      </template>
    </sp-button>
    <sp-button type="primary">
      后置图标
      <template #sufIcon>
        <sp-icon icon="check" />
      </template>
    </sp-button>
    <sp-button type="primary">
      <template #preIcon>
        <sp-icon icon="check" />
      </template>
      前后置图标
      <template #sufIcon>
        <sp-icon icon="check" />
      </template>
    </sp-button>
  </div>
</template>
<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
library.add(faCheck)
</script>
<style>
.demo-container {
  margin: 10px;
}
</style>
