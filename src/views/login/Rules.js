export const validationRules = {
    userName: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { min: 1, max: 16, message: '用户名长度在 1 到 16 个字符', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 1, max: 12, message: '密码长度在 1 到 12 个字符', trigger: 'blur' }
    ],
    confirmPassword: [
      { required: true, message: '请确认密码', trigger: 'blur' }
    ]
  };
  export const handleError = (error, showToast) => {
    if (error.response && error.response.data) {
      const responseData = error.response.data;
      if (responseData.data && responseData.data.msg) {
        showToast(responseData.data.msg);
      } else if (responseData.msg) {
        showToast(responseData.msg);
      } else {
        showToast('请求失败，请重试');
      }
    } else {
      showToast('请求失败，请重试');
    }
    console.error(error);
  };