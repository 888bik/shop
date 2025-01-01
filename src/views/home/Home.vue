<template>
  <div class="top-nav-bar">
    <nav-bar>
      <template v-slot:default>网上商城</template>
    </nav-bar>
  </div>
  <!-- 轮播图 -->
  <div class="swipe-banner">
    <banner :recommendData="recommendData"></banner>
  </div>
  <!-- 推荐 -->
  <div class="recommend-list">
    <recommend></recommend>
  </div>
</template>

<script setup>
import NavBar from "@/components/common/navbar/NavBar.vue";
import Banner from "@/views/home/cpns/Banner.vue";
import Recommend from "@/views/home/cpns/Recommend.vue";
import recommendData from '@/assets/data/recommendData.js';
</script>

<style scoped></style>
