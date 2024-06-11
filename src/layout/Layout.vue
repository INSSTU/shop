<script setup lang="ts"></script>

<template>
  <main>
    <router-view></router-view>
  </main>
  <div class="bottom-nav">
    <router-link to="home">主页</router-link>
    <router-link to="search">搜索</router-link>
    <router-link to="cart">购物</router-link>
    <router-link to="user">用户</router-link>
  </div>
</template>

<style lang="scss" scoped>
main{
  height: calc(100vh - var(--bottom-nav-height));
  overflow: auto; //滚动条
}

.bottom-nav{
  width: 375rem;
  height: var(--bottom-nav-height);
  background-color: #bfa;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  text-align: center;

  a{
    width: 25%;
  }
}
</style>