<template>
    <div class="swipe">
      <van-swipe :autoplay="3000" indicator-color="white">
        <!-- 使用 v-for 渲染所有的图片 -->
        <van-swipe-item v-for="(item, index) in imagesData" :key="index">
          <!-- 使用 :src 动态绑定图片路径 -->
          <img :src="item.image" alt="image" class="swipe-image" />
        </van-swipe-item>
        <template #indicator="{ active, total }">
          <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
        </template>
      </van-swipe>
    </div>
  </template>
  
  <script setup>
  // 使用 import 直接引入图片
  const imagesData = [
    { image: new URL("@/assets/image/home/image1.png", import.meta.url).href },
    { image: new URL("@/assets/image/home/image2.png", import.meta.url).href },
    { image: new URL("@/assets/image/home/image3.png", import.meta.url).href },
  ];
  </script>
  
  <style scoped>
  .swipe-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 确保图片不失真 */
  }
  
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
  </style>