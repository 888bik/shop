<template>
  <div class="tab-bar">
    <!-- 分割线 -->
    <div class="divider"></div>
    <template v-for="(item, index) in props.tabbarData" :key="index">
      <div
        class="tab-bar-item"
        @click="tabbarClick(index, item)"
        :class="{ active: currentIndex === index }"
      >
        <span class="text">{{ item.text }}</span>
        <img
          v-if="currentIndex === index"
          :src="getAssetUrl(item.imageActive)"
        />
        <img v-else :src="getAssetUrl(item.image)" />
      </div>
    </template>
  </div>
</template>

<script setup>
import tabbarData from "@/assets/data/tabbarData.js";
import router from "@/router";
import getAssetUrl from "@/utils/load_assets";
import { toRef } from "vue";

const props = defineProps({
  tabbarData: {
    type: Array, 
    default: () => [],
  },
});

const currentIndex = toRef(0);

// 监听导航按钮点击
function tabbarClick(index, item) {
  currentIndex.value = index;
  router.push(item.path);
  console.log(item);
}
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  background-color: white;
  .divider {
    width: 100%;
    height: 1px; /* 控制分割线的厚度 */
    background-color: #f2f2f2; /* 控制分割线的颜色 */
    position: fixed;
    bottom: 5;
  }
  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 26px;
    }

    .text {
      font-size: 12px;
      margin-top: 2px;
    }

    &.active {
      color: var(--primary-color);
    }
  }
}
</style>
