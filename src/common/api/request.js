import axios from 'axios';

export default {
    common: {
        method: 'get',
        data: {},
        params: {}
    },
    $axios(option = {}) {
        // 使用 Object.assign 处理默认值
        const config = Object.assign({}, this.common, option);

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
                // 记录错误日志
                console.error('Axios request failed:', error);
                return Promise.reject(error);
            });
    }
};