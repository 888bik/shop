<template>
  <div class="items">
    <!-- 遍历商品列表 -->
    <div v-for="(item, index) in data" :key="index" class="item">
      <!-- 选择圆点 -->
      <div
        class="select-dot"
        :class="{ selected: selectedItems[index] }"
        @click="toggleSelect(index)"
      ></div>
      <div class="product">
        <van-card
          :num="item.productNum"
          :price="item.productPrice"
          desc="暂无"
          :title="item.productName"
          :thumb="getAssetUrl(item.productImgUrl)"
        >
          <template #tags>
            <van-tag plain type="danger">超优惠</van-tag>
            <van-tag plain type="danger">买一送一</van-tag>
          </template>
          <template #footer>
            <van-button size="small" @click="add(index)">添加</van-button>
            <van-button size="small" @click="remove(index)">删除</van-button>
          </template>
        </van-card>
        <!-- 分割线 -->
        <div class="divider"></div>
      </div>
    </div>

    <!-- 结算 -->
    <div class="bottom-bar">
      <span class="total-price">合计: ￥{{ totalPrice }}</span>
      <button
        class="checkout-button"
        @click="toCheckout"
        :disabled="totalPrice === 0"
      >
        结算
      </button>
    </div>

    <transition name="fade">
      <div v-if="isPaymentSuccessful" class="payment-success-overlay">
        <div class="payment-success-box">
          <p>支付成功</p>
          <van-button size="small" @click="closePaymentSuccess"
            >取消</van-button
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import getAssetUrl from "@/utils/load_assets";
import { computed, ref } from "vue";

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
});

// 初始化选中的商品状态
const selectedItems = ref(new Array(props.data.length).fill(false)); // 默认所有商品未选中

// 选中切换
function toggleSelect(index) {
  selectedItems.value[index] = !selectedItems.value[index]; // 切换当前商品的选中状态
}

// 计算总价
const totalPrice = computed(() => {
  return props.data
    .filter((_, index) => selectedItems.value[index]) // 只计算选中的商品
    .reduce((sum, item) => sum + item.productPrice * item.productNum, 0);
});

// 添加按钮
function add(index) {
  props.data[index].productNum += 1;
}

// 删除按钮
function remove(index) {
  if (props.data[index].productNum > 0) {
    props.data[index].productNum -= 1;
  }
}

// 控制支付成功提示框的显示状态
const isPaymentSuccessful = ref(false);

// 结账按钮点击事件
function toCheckout() {
  // 显示支付成功提示框
  isPaymentSuccessful.value = true;
}

// 关闭支付成功提示框
function closePaymentSuccess() {
  isPaymentSuccessful.value = false;
}
</script>

<style lang="less" scoped>
.divider {
  width: 100%;
  height: 5px; /* 控制分割线的厚度 */
  background-color: white; /* 控制分割线的颜色 */
}

.items {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.item {
  display: flex;
  align-items: flex-start; /* 垂直对齐 */
  margin-bottom: 15px; /* 给每个商品之间增加一些间距 */
}

.select-dot {
  width: 24px;
  height: 24px;
  margin-top: 35px;
  margin-right: 10px;
  // margin-top: -30px;
  // display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/image/shopcart/unselected.png");
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}

.select-dot.selected {
  // background-color: #ff7f50; /* 选中时改变颜色 */
  // background-image: url('https://example.com/your-selected-image.png'); /* 选中时更换图片 */
  background-image: url("@/assets/image/shopcart/selected.png");
}

.product {
  flex-grow: 1; /* 商品部分占满剩余空间 */
  padding-left: 2px; /* 给商品与圆点之间增加一些间距 */
}

.bottom-bar {
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px 16px;
  border-top: 1px solid #ddd;
}

.checkout-button {
  background: linear-gradient(to right, #ff5f5f, #ff0000);
  border: none;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 35px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100px;
}

.checkout-button:disabled {
  background: #d3d3d3; 
  color: #a0a0a0; 
  cursor: not-allowed; 
  box-shadow: none; 
}

.checkout-button:hover:enabled {
  background: linear-gradient(to right, #ff0000, #ff5f5f);
}
.total-price {
  font-size: 18px;
  color: red;
}

.checkout-button:hover {
  background: linear-gradient(to right, #ff0000, #ff5f5f);
}

/* 支付成功提示框样式 */
.payment-success-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
  z-index: 1000; /* 确保提示框位于最上层 */
}

/* 弹出框样式 */
.payment-success-box {
  background-color: #fff;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  transform: scale(0.5);
  animation: popIn 1s ease-out forwards; /* 延长弹出动画时间 */
}

.payment-success-box p {
  font-size: 18px;
  color: #4caf50; /* 绿色字体 */
  margin: 0;
}

/* 取消按钮样式 */
.payment-success-box .van-button {
  margin-top: 10px;
}

/* 弹出动画 */
@keyframes popIn {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* 提示框的过渡效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
