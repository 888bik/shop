// index.js
import { createPinia, defineStore } from "pinia";
import { useUserStore } from './modules/user';

const pinia = createPinia();
export default pinia;

// 定义 root store 并引入 user 模块
export const useRootStore = defineStore('root', {
    // 使用静态导入的方式引入 user 模块
    modules: {
        user: useUserStore
    }
});

// 导出 useUserStore 以便其他地方使用
export { useUserStore };