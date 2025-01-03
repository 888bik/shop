<template>
  <div class="top-nav-bar">
    <header>
      <div class="my-bg">
        <img src="D:\Code\My_Html\shop\src\assets\image\my\gdcp.png" alt="Background Image">
      </div>
      <div class="login">
        <div class="login-actore" v-if="loginStatus">
          {{ userInfo.userName }}
        </div>
        <div class="login-actore" @click="loginClick" v-else>
          登录/注册
        </div>
      </div>
    </header>
    <section class="user-section">
      <ul class="user-links">
        <li>
          <a href="#address">地址管理</a>
        </li>
        <li>
          <a href="#orders">我的订单</a>
        </li>
        <li>
          <a href="#settings">设置</a>
        </li>
        <li v-if="loginStatus">
          <div class="logout" @click="logoutClick">退出登录</div>
        </li>
      </ul>
    </section>
    <nav-bar>
      <template v-slot:default>我的</template>
    </nav-bar>
  </div>
</template>

<script setup>
import NavBar from "@/components/common/navbar/NavBar.vue";
import { useRouter } from "vue-router";
import { useUserStore } from '@/stores/index.js';
import { computed } from 'vue';

const userStore = useUserStore();
const loginStatus = computed(() => userStore.loginStatus);
const userInfo = computed(() => userStore.userInfo);

let router = useRouter();
const loginClick = () => {
    router.push("/login");
};

const logoutClick = () => {
    userStore.logout();
};
</script>

<style scoped>
.top-nav-bar {
  font-family: Arial, sans-serif;
  background-color: #f4f4f9;
}

header {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.my-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.my-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.login {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.login-actore {
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
}

.logout {
  margin-top: 10px;
  cursor: pointer;
  color: #42b983;
  font-size: 0.9em;
}

.user-section {
  padding: 20px;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.user-links li {
  margin-bottom: 10px;
}

.user-links li a {
  text-decoration: none;
  color: #333;
  font-size: 1em;
  font-weight: bold;
}

.user-links li a:hover {
  color: #42b983;
  text-decoration: underline;
}

.user-links li .logout {
  margin-top: 0;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: #42b983;
  font-size: 0.9em;
  text-align: left;
}
</style>