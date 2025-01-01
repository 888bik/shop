<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar :tabbarData="tabbarData"></tab-bar>
  </div>
</template>

<script setup>
import tabbarData from "@/assets/data/tabbarData.js";
import TabBar from '@/components/common/navbar/TabBar.vue';
import home from '@/views/home/home.vue';
</script>

<style lang="less" scoped>

</style>
