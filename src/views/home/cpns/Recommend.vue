<template>
  <div class="recommend-list">
    <van-grid :border="false" :column-num="3" :gutter="10">
      <van-grid-item
        v-for="(product, index) in products"
        :key="product.id"
        @click="goToProductDetail(product.id)"
      >
        <van-image :src="getAssetUrl(product.image)" />
        <span>{{ product.name }}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import router from "@/router";
import getAssetUrl from "@/utils/load_assets";
// 接收父组件传递的数据
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});
console.log(props.products);
// 跳转到商品详情页
function goToProductDetail(productId) {
  router.push(`/detail/${productId}`);
}
</script>

<style lang="less" scoped></style>
