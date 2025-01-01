<template>
  <div class="page-container">
    <!-- 导航栏 -->
    <div class="NavBar">
      <nav-bar>
        <template v-slot:default>购物车</template>
      </nav-bar>
    </div>

    <!-- 商品列表 -->
    <div class="GoodsList" v-for="(item, index) in GoodsData" :key="index">
      <goods-list :index="index"></goods-list>
      <div class="divider"></div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import NavBar from "../../components/common/navbar/NavBar.vue";
import GoodsList from "@/views/shopCart/cpns/GoodsList.vue";
export default {
  name: "Home",
  components: {
    NavBar,
    GoodsList,
  },
  setup() {
    const state = reactive({
      count: 0,
    });
    //TODO
    
    const GoodsData = [
      {
        num: 3,
        price: 9.99,
        desc: "牛逼",
        title: "bi",
        thumb: "@/assets/image/home/image1.png",
      },
      {
        num: 4,
        price: 9.99,
        desc: "牛逼",
        title: "bi",
        thumb: "@/assets/image/home/image1.png",
      },
      {
        num: 7,
        price: 9.99,
        desc: "牛逼",
        title: "bi",
        thumb: "@/assets/image/home/image1.png",
      },
      {
        num: 7,
        price: 9.99,
        desc: "牛逼",
        title: "bi",
        thumb: "@/assets/image/home/image1.png",
      },
      {
        num: 7,
        price: 9.99,
        desc: "牛逼",
        title: "bi",
        thumb: "@/assets/image/home/image1.png",
      },
      ,
    ];
    return {
      ...toRefs(state),
      GoodsData,
    };
  },
};
</script>

<style lang="less" scoped>
.divider {
  width: 100%;
  height: 5px; /* 控制分割线的厚度 */
  background-color: white; /* 控制分割线的颜色 */
}
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
