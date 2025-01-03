<template>
  <div class="page-container">
    <!-- 导航栏 -->
    <div class="NavBar">
      <nav-bar>
        <template v-slot:default>购物车</template>
      </nav-bar>
    </div>

    <!-- 商品列表 -->
    <div class="GoodsList">
      <goods-list :data="GoodsData.data" />
      <!-- 分割线 -->
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import NavBar from "../../components/common/navbar/NavBar.vue";
import GoodsList from "@/views/shopCart/cpns/GoodsList.vue";
import axios from "axios";

// 定义响应式状态
const GoodsData = ref([]);

// 获取购物车数据
const fetchCartData = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/cart/${id}`);
    GoodsData.value = response.data;
  } catch (error) {
    console.error("获取购物车数据失败：", error);
  }
};

// 在组件挂载时获取用户id并加载数据
onMounted(() => {
  const userInfo = JSON.parse(localStorage.getItem("saveUserInfo"));
  if (userInfo && userInfo.id) {
    fetchCartData(userInfo.id); // 使用用户ID加载购物车数据
  }
});
</script>

<style lang="less" scoped>

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.NavBar {
  background-color: #fff;
  padding: 10px;
}

.GoodsList {
  // flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
  background-color: #f5f5f5;
}
</style>
