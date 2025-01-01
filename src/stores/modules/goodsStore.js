import { defineStore } from "pinia";

const UseGoodsStore = defineStore("goods", {
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
export default UseGoodsStore;