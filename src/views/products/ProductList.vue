<script setup lang="ts">
// 创建一个ref数组
const products = ref<Product[]>([])

// 创建一个页码
const pageNumber = ref(1)

// 加载数据
/* fetch(import.meta.env.VITE_BASE_API + '/products')
  .then((res) => res.json() as Promise<Page<Product>>)
  .then((data) => (products.value = data.data)) */

const url = computed(() => `products?page=${pageNumber.value}`)

// const { data, loading} = useFetch<Page<Product>>(url)
const { data, isFetching} = useFetch<Page<Product>>(url).json()

// 注入依赖
const scrollEle = inject<Ref<HTMLDivElement>>(SCROLL_ELE)

const scrollHandler = () => {
  if (scrollEle) {
    if (scrollEle.value.scrollHeight - scrollEle.value.scrollTop === scrollEle.value.clientHeight) {
      if (data.value && pageNumber.value < data.value.totalPages) {
        pageNumber.value++
      }
    }
  }
}

watchEffect(() => {
  if(data.value){
    products.value.push(...data.value.data)
  }
})

// 当窗口滚动到最后时，使页码自增，加载下一页
onMounted(() => {
  if (scrollEle) {
    scrollEle.value.addEventListener('scroll', scrollHandler)
  }
})

onUnmounted(() => {
  if (scrollEle) {
    scrollEle.value.removeEventListener('scroll', scrollHandler)
  }
})
</script>

<template>
  <div class="product-list">
    <div class="product" v-for="item in products" :key="item.id">
      <div class="img-wrap">
        <img :src="item.image_url" :alt="item.name" />
      </div>
      <h2>{{ item.name }}</h2>
      <h3>{{ item.price }}</h3>
    </div>
  </div>
  <p class="msg" v-show="isFetching">---- 加载中 ----</p>
  <p class="msg" v-show="!isFetching && data?.totalPages === pageNumber">---- 已经加载到最后 ----</p>
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

.msg {
  text-align: center;
  font-size: 14rem;
}
</style>
