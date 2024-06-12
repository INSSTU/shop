<script setup lang="ts">

// 创建一个ref数组
const products = ref<Product[]>([])

// 加载数据
fetch(import.meta.env.VITE_BASE_API + "/products")
.then((res) => res.json() as Promise<Page<Product>>)
.then((data) => (products.value = data.data))
</script>

<template>
  <div class="product" v-for="item in products" :key="item.id">
    <div class="img-wrap">
      <img :src="item.image_url" :alt="item.name">
    </div>
    <h2>{{ item.name }}</h2>
    <h3>{{ item.price }}</h3>
  </div>
</template>

<style lang="scss" scoped></style>