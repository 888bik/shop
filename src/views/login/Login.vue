<template>
  <nav-bar>
    <template v-slot:default>用户登陆</template>
  </nav-bar>
  <div class="container">
    <div class="form login-form">
      <h2>登录</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="userName">用户名</label>
          <input type="text" id="userName" v-model.trim="userName" required />
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input type="password" id="password" v-model.trim="password" required />
        </div>
        <button type="submit" class="button login-button" :disabled="isLoading">
          {{ isLoading ? '登录中...' : '登录' }}
        </button>
      </form>
      <div class="form-links">
        <a href="#" @click.prevent="handleRegister">立即注册</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from '../../components/common/navbar/NavBar.vue';
import http from '@/components/common/api/request.js';
import { showToast } from 'vant';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/index.js';
import { validationRules, handleError } from './Rules.js';

const userStore = useUserStore();
const userName = ref('');
const password = ref('');
const router = useRouter();
const isLoading = ref(false); // 添加加载状态

const validateField = (field, value) => {
  const fieldRules = validationRules[field];
  let isValid = true;
  for (const rule of fieldRules) {
    if (rule.required && !value.trim()) {
      showToast(rule.message);
      return false;
    }
    if (rule.min && value.length < rule.min || rule.max && value.length > rule.max) {
      showToast(rule.message);
      return false;
    }
  }
  return isValid;
};

const handleSubmit = async () => {
  // 验证用户名
  if (!validateField('userName', userName.value)) return;
  
  // 验证密码
  if (!validateField('password', password.value)) return;

  isLoading.value = true; // 设置加载状态为 true

  try {
    console.log('Form validation passed:', { userName: userName.value, password: password.value });

    const response = await http.$axios({
      url: '/api/login',
      method: 'post',
      data: {
        userName: userName.value,
        password: password.value
      }
    });

    console.log(response);
    
    // 检查后端返回的成功状态
    if (response.success) {
      showToast('登录成功');
      userStore.userLogin(response.data);
      router.push('/my');
    } else {
      // 处理登录失败的情况
      showToast(response.msg || '登录失败，请重试');
    }
  } catch (error) {
    handleError(error, showToast);
  } finally {
    isLoading.value = false; // 设置加载状态为 false
  }
};

const handleRegister = () => {
  // 跳转到/register路由
  router.push('/register');
};
</script>

<style lang="scss" scoped>
@import 'form-styles.scss';
</style>