<template>
  <div class="registration-container">
    <h1>创建账户</h1>
    <p class="subtitle">加入我们，开始您的旅程</p>
    <form id="registrationForm" onsubmit="return handleRegister()">
      <div class="input-group">
        <label for="username">用户名</label>
        <input type="text" id="username" placeholder="输入用户名" required />
      </div>
      <div class="input-group">
        <label for="email">邮箱</label>
        <input type="email" id="email" placeholder="输入邮箱" required />
      </div>
      <div class="input-group">
        <label for="password">密码</label>
        <input type="password" id="password" placeholder="输入密码" required />
      </div>
      <div class="input-group">
        <label for="confirm-password">确认密码</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="确认密码"
          required
        />
      </div>
      <button type="submit">注册</button>
    </form>
    <div id="message"></div>
    <div class="footer">
      <p>已经有账户？<a href="#">登录</a></p>
    </div>
  </div>
</template>
<script>
function handleRegister() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const messageElement = document.getElementById("message");

  // 简单的验证
  if (password !== confirmPassword) {
    messageElement.textContent = "密码和确认密码不匹配！";
    messageElement.style.color = "red";
    return false;
  }

  // 进行进一步处理，例如发送数据到服务器
  messageElement.textContent = "注册成功！";
  messageElement.style.color = "green";

  // 阻止表单的默认提交行为
  return false;
}
</script>
<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  font-family: "Arial", sans-serif;
}

.registration-container {
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.15);
  max-width: 450px;
  width: 100%;
  text-align: center;
}

h1 {
  margin-bottom: 10px;
  color: #1e88e5;
}

.subtitle {
  margin-bottom: 20px;
  color: #555;
  font-size: 14px;
}

.input-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s;
  font-size: 14px;
  box-sizing: border-box; /* 确保padding不超出宽度 */
}

input:focus {
  border-color: #1e88e5;
  outline: none;
  box-shadow: 0 0 5px rgba(30, 136, 229, 0.5);
}

button {
  width: 100%;
  padding: 12px;
  background-color: #1e88e5;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 16px;
}

button:hover {
  background-color: #1976d2;
}

#message {
  text-align: center;
  margin-top: 15px;
  color: red;
}

.footer {
  text-align: center;
  margin-top: 20px;
}

.footer a {
  color: #1e88e5;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
</style>
