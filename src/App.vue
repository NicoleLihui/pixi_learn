<script setup lang="ts">
</script>

<template>
  <nav>
    <RouterLink to="/graphics">图形绘制</RouterLink>
    <RouterLink to="/assetsView">图片绘制</RouterLink>
    <RouterLink to="/textView">文字绘制</RouterLink>
    <RouterLink to="/filterView">滤镜绘制</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
</style>
