<template>
    <div class="top-nav-bar">
      <nav-bar>
        <template v-slot:default>网上商城</template>
      </nav-bar>
    </div>
    <!-- 引入并使用 Banner 组件 -->
    <banner></banner>
  </template>
  
  <script setup>
  import NavBar from "@/components/common/navbar/NavBar.vue";
  import Banner from "@/views/home/Banner.vue"; // 确保路径正确
  </script>
  
  <style scoped>
  </style>
