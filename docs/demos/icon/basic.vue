<template>
  <div class="demo-container">
    <sp-icon icon="check" />
    <sp-icon icon="house" />
    <sp-icon icon="user" />
  </div>
  <div class="demo-container">
    <sp-icon icon="check" type="primary" />
    <sp-icon icon="house" type="warning" />
    <sp-icon icon="user" type="success" />
    <sp-icon icon="image" type="danger" />
    <sp-icon icon="xmark" type="info" />
  </div>
  <div class="demo-container">
    <sp-icon icon="check" color="pink" />
    <sp-icon icon="house" color="#999" />
    <sp-icon icon="user" color="#f00" />
  </div>
</template>

<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCheck,
  faHouse,
  faImage,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
library.add(faCheck, faHouse, faUser, faImage, faXmark)
</script>

<style scoped>
.sp-icon {
  margin: 6px;
  font-size: 20px;
}
</style>
