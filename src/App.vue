<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar :tabbarData="tabbarData"></tab-bar>
  </div>
</template>

<script setup>
import tabbarData from "@/assets/data/tabbarData.js";
import TabBar from '@/components/common/navbar/TabBar.vue';
import { onMounted } from 'vue';
import { useUserStore } from '@/stores/index.js';
const userStore = useUserStore();
onMounted(() => {
  userStore.initUser();
});
</script>

<style lang="less" scoped>

</style>
