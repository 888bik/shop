<template>
  <div class="recommend-list">
    <van-grid :border="false" :column-num="3" :gutter="10">
      <van-grid-item @click="goToProductDetail(index)">
        <van-image :src="shoujiImage" />
        <span>手机</span>
      </van-grid-item>
      <van-grid-item>
        <van-image
          :src="diannaoImage"
        />
        <span>电脑</span>
      </van-grid-item>
      <van-grid-item>
        <van-image
          :src="pingbanImage"
        />
        <span>平板</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script setup>
import shoujiImage from '@/assets/image/home/华为手机.png';
import diannaoImage from '@/assets/image/home/华为电脑.png'
import pingbanImage from '@/assets/image/home/华为平板.png'
import router from '@/router';
// 跳转到商品详情页
function goToProductDetail(productId) {
  router.push(`/detail/1`)
  console.log(productId);
}
</script>

<style lang="less" scoped>

</style>
