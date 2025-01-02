import axios from 'axios';
import { useUserStore } from '@/stores/modules/user.js';

export default {
    common: {
        method: 'get',
        data: {},
        params: {},
        headers: {}
    },
    $axios(option = {}) {
        const userStore = useUserStore();
        option.headers = { ...this.common.headers, ...(option.headers || {}) };

        if (option.headers.token) {
            option.headers.token = userStore.token;
        } else if (option.headers.token !== undefined) {
            console.error('用户未登录');
            return Promise.reject('用户未登录');
        }

        const config = { ...this.common, ...option };

        return axios(config)
            .then(response => {
                // 验证响应数据
                const responseData = response?.data?.data;
                if (responseData === undefined) {
                    return Promise.reject('Invalid response');
                }
                return responseData;
            })
            .catch(error => {
                // 记录错误日志并分类处理
                console.error('Axios request failed:', error);
                if (error.response) {
                    // 服务器响应错误
                    return Promise.reject(`Server Error: ${error.response.statusText}`);
                } else if (error.request) {
                    // 请求已发出但无响应
                    return Promise.reject('No response received');
                } else {
                    // 其他错误
                    return Promise.reject(error.message);
                }
            });
    }
};