<script setup lang="ts">
const count = ref(10)
const newCount = computed(() => count.value + 3)
</script>

<template>
  <h1>Hello vue -- {{ count }} -- {{ newCount }} </h1>
</template>

<style scoped></style>
