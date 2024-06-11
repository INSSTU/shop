<script setup lang="ts"></script>

<template>
  <main>
    <router-view></router-view>
  </main>
  <div class="bottom-nav">
    <router-link to="home"><Svg-icon name="icon-home"></Svg-icon></router-link>
    <router-link to="search"><Svg-icon name="icon-search"></Svg-icon></router-link>
    <router-link to="cart"><Svg-icon name="icon-cart"></Svg-icon></router-link>
    <router-link to="user"><Svg-icon name="icon-user"></Svg-icon></router-link>
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
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  text-align: center;
  border-top: 1px solid #ddd;

  a{
    width: 25%;
    font-size: 26rem;
    color: #666;
  }

  .router-link-active{
    color: #000;
  }
}
</style>