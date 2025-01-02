import { defineStore } from "pinia";
// 存储购物车数据
const UseShopCartListStore = defineStore("shopcartlist", {
  state: () => {
    return {
      allGoods:{},
    }
  },
  actions: {
    async fetchAllGoodsData() {
      const res = await getAllGoods();
      this.allGoods = res.data;
    }
  }
})
export default UseShopCartListStore;