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
    <recommend :products="recommendData"></recommend>
  </div>
  <!-- 分割线 -->
  <div class="divider"></div>
  <!-- 标签商品列表 -->
  <div class="tab-products">
    <tab-product></tab-product>
  </div>
</template>

<script setup>
import NavBar from "@/components/common/navbar/NavBar.vue";
import Banner from "@/views/home/cpns/Banner.vue";
import Recommend from "@/views/home/cpns/Recommend.vue";
import TabProduct from "@/views/home/cpns/TabProduct.vue";
import recommendData from "@/assets/data/recommendData.js";

</script>

<style scoped>
.divider {
  width: 100%;
  height: 10px; /* 控制分割线的厚度 */
  background-color:#eee; /* 控制分割线的颜色 */
}
</style>
