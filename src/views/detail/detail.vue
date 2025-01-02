<template>
  <div class="good-detail">
    <h1>商品详情</h1>
    <p>商品ID: {{ goodId }}</p>
    //TODO
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

// 使用 `defineProps` 来接收路由传递的 `id` 参数
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const goodId = props.id // 从 props 中获取商品 ID
</script>

<style scoped>
.product-detail {
  padding: 20px;
}
</style>
