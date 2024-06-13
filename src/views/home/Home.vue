<script setup lang="ts">
const scrollEle = ref(null)

// 设置scrollEle
provide(SCROLL_ELE, scrollEle)
</script>

<template>
  <div ref="scrollEle">
    <h1 class="title">成店</h1>

    <CategoryList></CategoryList>

    <ProductList></ProductList>
  </div>
</template>

<style lang="scss" scoped>
.title {
  text-align: center;
}
</style>