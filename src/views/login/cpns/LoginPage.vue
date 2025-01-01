<template>
  <div class="container">
    <div class="form-container">
      <div class="form-header">
        <h2>{{ isLogin ? '登录' : '注册' }}</h2>
        <p v-if="isLogin" @click="toggleForm">没有账号？去注册</p>
        <p v-else @click="toggleForm">已有账号？去登录</p>
      </div>

      <form @submit.prevent="handleSubmit">
        <div class="input-group">
          <input
            v-model="formData.username"
            type="text"
            placeholder="请输入用户名"
            required
          />
        </div>
        <div class="input-group">
          <input
            v-model="formData.password"
            type="password"
            placeholder="请输入密码"
            required
          />
        </div>
        <div v-if="!isLogin" class="input-group">
          <input
            v-model="formData.confirmPassword"
            type="password"
            placeholder="确认密码"
            required
          />
        </div>
        <div class="submit-btn">
          <button type="submit">{{ isLogin ? '登录' : '注册' }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isLogin = ref(true); // 控制登录或注册状态
const formData = ref({
  username: '',
  password: '',
  confirmPassword: ''
});

const toggleForm = () => {
  isLogin.value = !isLogin.value; // 切换表单状态
  formData.value = { username: '', password: '', confirmPassword: '' }; // 清空表单数据
};

const handleSubmit = () => {
  if (isLogin.value) {
    console.log('登录数据:', formData.value);
  } else {
    if (formData.value.password === formData.value.confirmPassword) {
      console.log('注册数据:', formData.value);
    } else {
      alert('密码和确认密码不一致！');
    }
  }
};
</script>

<style scoped>
/* 基本布局 */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color:#DCDCDC;
}

.form-container {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-header {
  text-align: center;
  margin-bottom: 20px;
}

.form-header h2 {
  color: red;
  font-size: 24px;
  margin-bottom: 10px;
}

.form-header p {
  color: #999;
  cursor: pointer;
}

.input-group {
  margin-bottom: 15px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
}

.submit-btn {
  text-align: center;
}

.submit-btn button {
  background-color: red;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  font-size: 18px;
  width: 100%;
  cursor: pointer;
}

.submit-btn button:hover {
  background-color: red;
}

@media (max-width: 600px) {
  .form-container {
    padding: 15px;
  }

  .form-header h2 {
    font-size: 20px;
  }

  .input-group input {
    font-size: 14px;
  }

  .submit-btn button {
    font-size: 16px;
  }
}
</style>
