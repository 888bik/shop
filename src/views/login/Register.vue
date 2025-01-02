<template>
  <nav-bar>
    <template v-slot:default>注册</template>
  </nav-bar>
  <div class="container">
    <div class="form register-form">
      <h2>注册</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="userName">用户名</label>
          <input type="text" id="userName" v-model.trim="userName" required />
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input type="password" id="password" v-model.trim="password" required />
        </div>
        <div class="form-group">
          <label for="confirmPassword">确认密码</label>
          <input type="password" id="confirmPassword" v-model.trim="confirmPassword" required />
        </div>
        <button type="submit" class="button register-button" :disabled="isLoading">
          {{ isLoading ? '注册中...' : '注册' }}
        </button>
      </form>
      <div class="form-links">
        <a href="#" @click.prevent="handleLogin">已有账号，立即登录</a>
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
import { validationRules, handleError } from './Rules.js';

const userName = ref('');
const password = ref('');
const confirmPassword = ref('');
const router = useRouter();
const isLoading = ref(false); // 添加加载状态

// 定义 validateConfirmPassword 函数
const validateConfirmPassword = (value) => {
  return value === password.value;
};

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
    if (rule.validator && !rule.validator(value)) {
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
  
  // 验证确认密码
  if (!validateField('confirmPassword', confirmPassword.value)) return;

  isLoading.value = true; // 设置加载状态为 true

  try {
    console.log('Form validation passed:', { userName: userName.value, password: password.value });

    const response = await http.$axios({
      url: '/api/register',
      method: 'post',
      data: {
        userName: userName.value,
        password: password.value
      }
    });

    console.log(response);
    showToast('注册成功');
    // 注册成功后的处理逻辑，例如跳转到登录页面
    router.push('/login');
  } catch (error) {
    handleError(error, showToast);
  } finally {
    isLoading.value = false; // 设置加载状态为 false
  }
};

const handleLogin = () => {
  // 跳转到/login路由
  router.push('/login');
};
</script>

<style lang="scss" scoped>
@import 'form-styles.scss';
</style>