<script setup lang="ts"></script>

<template>
  <router-view class="main"></router-view>

  <BottomNav></BottomNav>
</template>

<style lang="scss" scoped>
.main{
  height: calc(100vh - var(--bottom-nav-height));
  overflow: auto; //滚动条
}
</style>