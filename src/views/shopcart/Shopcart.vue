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
      <goods-list></goods-list>
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
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 确保页面占满整个视口 */
}

.NavBar {
  /* 设置导航栏样式 */
  background-color: #fff;
  padding: 10px;
}

.GoodsList {
  flex-grow: 1; 
  padding: 20px;
  background-color: #f5f5f5; 
}
</style>
