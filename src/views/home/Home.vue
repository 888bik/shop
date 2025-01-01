<template>
  <div>
    <nav-bar>
      <template v-slot:default>网上商城</template>
    </nav-bar>
  </div>
  <div>
    <swipe-page> </swipe-page>
  </div>
  <!-- 轮播图 -->
</template>

<script setup>
import navbar from "@/components/common/navbar/NavBar.vue";
import swipePage from "@/views/home/cpns/SwipePage.vue";
</script>

<style lang="less" scoped></style>
