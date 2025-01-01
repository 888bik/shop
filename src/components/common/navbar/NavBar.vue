<template>
    <div class="nav-bar">
      <div class="left" @click="goBack">
        <slot name="left">
          <el-icon size="20"><Back /></el-icon>
        </slot>
      </div>
      <div class="center">
        <slot></slot> <!-- 使用默认插槽 -->
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
  </template>
  
  <script>
  import { reactive, toRefs } from 'vue';
  import { useRouter } from 'vue-router';
  import { Back } from '@element-plus/icons-vue'; // 导入图标组件
  
  export default {
    setup() {
      const state = reactive({
        count: 0
      });
      const router = useRouter();
      const goBack = () => {
        router.go(-1);
      };
      return {
        ...toRefs(state),
        goBack
      };
    },
    components: {
      Back // 注册图标组件
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .nav-bar {
    background-color: #42b983;
    color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
    height: 45px;
    box-shadow: 0 5px 5px rgba(100, 100, 100, 0.2);
    display: flex;
    align-items: center; // 确保子元素垂直居中
  
    .left, .right {
      width: 60px;
      display: flex;
      justify-content: center; // 水平居中
      align-items: center; // 垂直居中
    }
  
    .center {
      flex: 1;
      text-align: center; // 文本居中
    }
  }
  </style>