<template>
  <van-tabs v-model:active="active" @click-tab="onClickTab" swipeable>
    <van-tab title="电子产品">内容 1</van-tab>
    <van-tab title="服装饰品">内容 2</van-tab>
    <van-tab title="休闲零食">内容 3</van-tab>
    <van-tab title="日用百货">内容 4</van-tab>
  </van-tabs>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const active = ref(0);
// const fetchProductsByCategoryId = async (id) => {
//   axios
//     .get(`http://localhost:3000/api/products/${id}`)
//     .then((response) => {
//       if (response.data.success) {
//         products.value = response.data;
//       } else {
//         console.error(response.msg);
//       }
//     })
//     .catch((error) => {
//       console.error("请求商品信息失败:", error);
//     });
// };
function onClickTab() {
  console.log(active.value);
  // fetchProductsByCategoryId();
}
</script>

<style lang="scss" scoped></style>
