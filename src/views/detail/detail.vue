<template>
  <!-- 顶部导航栏 -->
  <div class="nav-bar">
    <nav-bar></nav-bar>
  </div>
  <!-- 商品详情 -->
  <div class="product-detail" v-if="products.data">
    <div class="product-header">
      <h1>{{ products.data.title }}</h1>
      <p class="product-price">￥{{ products.data.price }}</p>
    </div>
    <div class="product-image">
      <img :src="getAssetUrl(products.data.image_url)" alt="Product Image" />
    </div>
    <div class="product-description">
      <h2>商品描述</h2>
      <p>{{ products.data.description }}</p>
    </div>
  </div>
  <!-- 底部 -->
  <div class="product-footer">
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" />
      <van-action-bar-icon icon="shop-o" text="店铺" />
      <van-action-bar-button type="warning" text="加入购物车" @click="addToCart"/>
      <van-action-bar-button color="red" type="danger" text="立即购买" />
    </van-action-bar>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";
import NavBar from "@/components/common/navbar/NavBar.vue";
import axios from "axios";
import getAssetUrl from "@/utils/load_assets";
// 接收路由传递的 `商品id` 参数
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});
const products = ref({
  data: null,
});
//根据路由id查询对应的商品详情
const fetchProductsById = async (id) => {
  axios
    .get(`http://localhost:3000/api/products/${id}`)
    .then((response) => {
      if (response.data.success) {
        products.value = response.data;
      } else {
        console.error(response.msg);
      }
    })
    .catch((error) => {
      console.error("请求商品信息失败:", error);
    });
};
//添加购物车功能
function addToCart() {
  console.log("点击");
}
// 组件加载时请求数据
onMounted(() => {
  fetchProductsById(props.id);
});
</script>

<style scoped>
.product-detail {
  max-width: 1200px;
  margin-top: 45px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.product-header {
  text-align: center;
  margin-bottom: 20px;
}

.product-header h1 {
  font-size: 32px;
  font-weight: bold;
  /* margin-bottom: 5px; */
  margin-top: 30px;
}

.product-price {
  font-size: 24px;
  color: #e74c3c;
  font-weight: bold;
}

.product-image {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.product-image img {
  max-width: 100%;
  height: 40vh;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.product-description {
  margin-top: 30px;
}

.product-description h2 {
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 600;
}

.product-description p {
  font-size: 16px;
  line-height: 1.6;
  color: #555;
}
</style>
