<script setup lang="ts"></script>

<template>
  <div class="bottom-nav">
    <router-link to="home"><Svg-icon name="icon-home"></Svg-icon></router-link>
    <router-link to="search"><Svg-icon name="icon-search"></Svg-icon></router-link>
    <router-link to="cart"><Svg-icon name="icon-cart"></Svg-icon></router-link>
    <router-link to="user"><Svg-icon name="icon-user"></Svg-icon></router-link>
  </div>
</template>

<style lang="scss" scoped>
.bottom-nav{
  width: 375rem;
  height: var(--bottom-nav-height);
  position: fixed;
  bottom: 0;
  display: flex;
  border-top: 1px solid var(--border-color);
  background-color: var(--secondary-color);

  a{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    font-size: 26rem;
    color: var(--light-color);
    // 取消点击后的高亮显示
    -webkit-tap-highlight-color: transparent;

    &.router-link-active{
    color: var(--primary-color);
  }
  }
}
</style>