<template>
  <van-tabs v-model:active="active" @click-tab="onClickTab" swipeable>
    <van-tab title="电子产品">内容 1</van-tab>
    <van-tab title="服装饰品">内容 2</van-tab>
    <van-tab title="休闲零食">内容 3</van-tab>
    <van-tab title="日用百货">内容 4</van-tab>
  </van-tabs>
</template>

<script setup>
import { ref } from "vue";

const active = ref(0);
function onClickTab() {
  console.log(active.value);
  //TODO
  // fetchTabGoodsByIndex();
}
</script>

<style lang="scss" scoped></style>
