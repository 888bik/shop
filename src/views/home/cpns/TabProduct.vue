<template>
  <van-tabs v-model:active="active" @click-tab="onClickTab" swipeable>
    <van-tab title="电子产品">
      <div class="product-list" v-if="productsList && productsList.length > 0">
        <div
          v-for="(product, index) in productsList"
          :key="product.id"
          class="product-item"
        >
          <van-card
            :thumb="getAssetUrl(product.image_url)"
            :title="product.title"
            :desc="product.description"
            :price="`¥${product.price}`"
          />
        </div>
      </div>
      <div v-else>
        <p>暂无电子产品</p>
      </div>
    </van-tab>
    <van-tab title="服装饰品">
      <div class="product-list" v-if="productsList && productsList.length > 0">
        <div
          v-for="(product, index) in productsList"
          :key="product.id"
          class="product-item"
        >
          <van-card
            :thumb="getAssetUrl(product.image_url)"
            :title="product.title"
            :desc="product.description"
            :price="`¥${product.price}`"
          />
        </div>
      </div>
      <div v-else>
        <p>暂无服装饰品</p>
      </div>
    </van-tab>
    <van-tab title="休闲零食">
      <div class="product-list" v-if="productsList && productsList.length > 0">
        <div
          v-for="(product, index) in productsList"
          :key="product.id"
          class="product-item"
        >
          <van-card
            :thumb="getAssetUrl(product.image_url)"
            :title="product.title"
            :desc="product.description"
            :price="`¥${product.price}`"
          />
        </div>
      </div>
      <div v-else>
        <p>暂无休闲零食</p>
      </div>
    </van-tab>
    <van-tab title="日用百货">
      <div class="product-list" v-if="productsList && productsList.length > 0">
        <div
          v-for="(product, index) in productsList"
          :key="product.id"
          class="product-item"
        >
          <van-card
            :thumb="getAssetUrl(product.image_url)"
            :title="product.title"
            :desc="product.description"
            :price="`¥${product.price}`"
          />
        </div>
      </div>
      <div v-else>
        <p>暂无日用百货</p>
      </div>
    </van-tab>
  </van-tabs>
</template>

<script setup>
import getAssetUrl from "@/utils/load_assets";
import axios from "axios";
import { ref, watchEffect } from "vue";

const active = ref(0);
const productsList = ref([""]);
const fetchProductsByCategoryId = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/products/category/${id}`
    );
    if (response.data.success) {
      // 成功获取商品列表，做后续操作
      productsList.value = response.data.products;
    } else {
      console.error("获取商品信息失败:", response.data.msg);
    }
  } catch (error) {
    console.error("请求商品信息失败:", error);
  }
};
function onClickTab() {
  const currentIndex = active.value;
  fetchProductsByCategoryId(currentIndex + 1);
}
//监听tab的点击
watchEffect(() => {
  if (active.value === 0) {
    fetchProductsByCategoryId(1); // 电子产品
  } else if (active.value === 1) {
    fetchProductsByCategoryId(2); // 服装饰品
  } else if (active.value === 2) {
    fetchProductsByCategoryId(3); // 休闲零食
  } else if (active.value === 3) {
    fetchProductsByCategoryId(4); // 日用百货
  }
});

// 初始加载第一个tab的数据
fetchProductsByCategoryId(1);
</script>

<style lang="less" scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  overflow-y: auto;
  padding-bottom: 60px;
}
.product-item {
  width: 48%;
}
</style>
