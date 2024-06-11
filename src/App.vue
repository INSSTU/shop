<script setup lang="ts"></script>

<template>
  <!-- 
   1.主页 商品列表
   2.搜索页
   3.购物车
   4.用户信息
   -->
  <router-view></router-view>
</template>

<!-- 
  scoped
    style标签设置scoped后，样式只会在当前组件中生效
    它的实现原理是：
      vue会为当前组件中的元素都添加一个唯一的属性
      设置样式时，所有的选择器都会被添加一个属性选择器
      h1 >> h1[data-v-7a7a37b1]
    除了为组件中元素设置属性外，他也会为子组件添加属性（并通过组件透传给子组件中的根目录）
 -->
<style lang="scss" scoped></style>
