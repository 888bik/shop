<template>
  <div class="item">
    <!-- 选择圆点 -->
    <div
      class="select-dot"
      :class="{ selected: (isSelected = isSelected) }"
      @click="toggleSelect(index)"
    ></div>
    <div class="product">
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
      >
        <template #tags>
          <van-tag plain type="danger">超优惠</van-tag>
          <van-tag plain type="danger">买一送一</van-tag>
        </template>
        <template #footer>
          <van-button size="small">结算</van-button>
          <van-button size="small" @click="remove(index)">删除</van-button>
        </template>
      </van-card>
    </div>
  </div>
  <div class="bottom">
    <van-submit-bar
      :price="3050"
      button-text="结算"
      @click="toCheckout"
      class="bottom-bar"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
// 选择状态默认为未选中
const isSelected = ref(false);
// 选中切换
function toggleSelect(index) {
  this.isSelected = !this.isSelected;
}
// 删除按钮
function remove(index) {
  //TODO
  console.log(index);
}
function toCheckout() {
  console.log(1111);
}
// 获取父组件传递过来的索引值
let props = defineProps({
  index: {
    type: Number,
    default: 0,
  },
});
</script>

<style lang="scss" scoped>

.item {
  display: flex;
  align-items: center;
  padding: 10px;
}
.select-dot {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-top: -30px;
  display: flex;
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
}
</style>
