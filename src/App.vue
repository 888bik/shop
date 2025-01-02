<template>
  <div class="app">
    <router-view></router-view>
    <div class="footer-nav" v-if="showFooter">
      <tab-bar :tabbarData="tabbarData"></tab-bar>
    </div>
  </div>
</template>

<script setup>
import tabbarData from "@/assets/data/tabbarData.js";
import TabBar from "@/components/common/tabbar/TabBar.vue";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useUserStore } from '@/stores/index.js';
const store = useUserStore();
onMounted(()=>{
  store.initUser();
});
//控制底部导航栏是否显示
const showFooter = ref(true);
// 使用 `watch` 监听路由变化
const route = useRoute();
// 监听路由变化来控制底部导航栏显示/隐藏
watch(() => route.path, (newPath) => {
  checkFooterVisibility(newPath);
});
// 根据路径判断是否显示底部导航栏
function checkFooterVisibility(path) {
  if (path.startsWith("/detail")) {
    showFooter.value = false; // 隐藏底部导航栏
  } else {
    showFooter.value = true; // 显示底部导航栏
  }
}
</script>

<style lang="less" scoped></style>
