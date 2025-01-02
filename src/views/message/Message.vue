<template>
  <div class="nav-bar">
    <nav-bar> </nav-bar>
  </div>
  <div class="nav-notice">
    <!-- 文字较短时，通过设置 scrollable 属性开启滚动播放 -->
    <van-notice-bar
      left-icon="volume-o"
      text="电子产品限时优惠,速来抢购！"
      scrollable
    />
  </div>
  <div class="message-container">
    <h2>最近的消息</h2>
    <div class="message-list">
      <div
        v-for="(message, index) in messages"
        :key="index"
        class="message-item"
      >
        <img :src="message.icon" alt="商家图标" class="message-icon" />
        <div class="message-content">
          <div class="message-title">{{ message.title }}</div>
          <div class="message-text">{{ message.text }}</div>
        </div>
        <div class="right">
          <div class="message-date">{{ message.date }}</div>
          <div v-if="message.unread > 0" class="message-badge">
            {{ message.unread }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="coupon">
    <!-- 优惠券单元格 -->
    <van-coupon-cell
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showList = true"
    />
    <!-- 优惠券列表 -->
    <van-popup
      v-model:show="showList"
      round
      position="bottom"
      style="height: 90%; padding-top: 4px"
    >
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
  </div>
</template>

<script setup>
import NavBar from "@/components/common/navbar/NavBar.vue";
import { ref } from "vue";
const coupon = {
  available: 1,
  condition: "无门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1735421009,
  endAt: 1735832009,
  valueDesc: "1.5",
  unitDesc: "元",
};
const coupons = ref([coupon]);
const showList = ref(false);
const chosenCoupon = ref(-1);

const onChange = (index) => {
  showList.value = false;
  chosenCoupon.value = index;
};
const onExchange = (code) => {
  coupons.value.push(coupon);
};
const messages = ref([
  {
    icon: "https://th.bing.com/th?id=ODLS.b05fe056-398a-4c0c-87e4-33c0c5c87ec9&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2", // 替换为真实图标链接
    title: "华为商城",
    text: "店铺最新活动来了，您感兴趣的商品有专属优惠！",
    date: "25/1/1",
    unread: 1,
  },
  {
    icon: "https://th.bing.com/th?id=ODLS.bb7fa62a-2a9f-4cfc-8626-15a0c5a20c04&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",
    title: "小米商城",
    text: "小米手机,遥遥领先",
    date: "25/1/2",
    unread: 1,
  },
  {
    icon: "https://th.bing.com/th?id=ODLS.a30edfc1-856a-4c57-93ff-e9fa0d89f000&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",
    title: "OPPO商城",
    text: "现在下单享跨店每满1000-200，还可叠加会员...",
    date: "25/1/3",
    unread: 4,
  },
  {
    icon: "https://th.bing.com/th?id=ODLS.1689bea7-2c78-4a51-b998-ca06fe9b1753&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",
    title: "三星官方旗舰店",
    text: "亲,喜欢就赶紧下单吧",
    date: "25/1/3",
    unread: 11,
  },
  {
    icon: "https://th.bing.com/th?id=ODLS.b8d72fc1-0f40-40fd-8fd8-8a64a79f0353&w=32&h=32&qlt=91&pcl=fffffa&o=6&pid=1.2",
    title: "维达纸品官方网店",
    text: "亲,买三送一哦",
    date: "25/1/3",
    unread: 4,
  },
]);
</script>

<style lang="less" scoped>
.nav-notice {
  margin-top: 45px;
}
.message-container {
  padding: 16px;
  background-color: #f5f5f5;
}

.message-container h2 {
  font-size: 18px;
  margin-bottom: 12px;
}

.message-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.message-item {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.message-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  margin-right: 12px;
}

.message-content {
  flex: 1;
}

.message-title {
  font-size: 14px;
  font-weight: bold;
  color: #333;
}

.message-text {
  font-size: 12px;
  color: #666;
  margin-top: 4px;
}

.message-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.message-date {
  font-size: 12px;
  color: #999;
  margin-bottom: 4px;
}

.message-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff4d4f;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.coupon {
  position: fixed;
  bottom: 45px;
  left: 0;
  right: 0;
}
</style>
