<script setup lang="ts">
// 创建一个ref数组
// const products = ref<Product[]>([])

// 加载数据
/* fetch(import.meta.env.VITE_BASE_API + '/products')
  .then((res) => res.json() as Promise<Page<Product>>)
  .then((data) => (products.value = data.data)) */

const { data, loading, error } = useFetch<Page<Product>>('/products')
</script>

<template>
  <div class="product-list" v-if="!error && !loading && data">
    <div class="product" v-for="item in data?.data" :key="item.id">
      <div class="img-wrap">
        <img :src="item.image_url" :alt="item.name" />
      </div>
      <h2>{{ item.name }}</h2>
      <h3>{{ item.price }}</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  .product {
    padding: 20rem;
    .img-wrap {
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    .name {
      font-size: 15rem;
      color: var(--light-color);
    }

    .price {
      &::before {
        content: '￥';
      }
    }
  }
}
</style>
