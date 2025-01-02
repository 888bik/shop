import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        userInfo: {},
        token: null,
        loginStatus: false
    }),
    actions: {
        async userLogin(user) {
            if (!user || !user.token) {
              console.error('Invalid user object:', user);
              return;
            }
          
            this.loginStatus = true;
            this.token = user.token;
            this.userInfo = user;
            localStorage.setItem('saveUserInfo', JSON.stringify(user));
          },
        initUser() {
            const userInfo = JSON.parse(localStorage.getItem('saveUserInfo'));
            if (userInfo) {
                this.loginStatus = true;
                this.token = userInfo.token;
                this.userInfo = userInfo;
            }
        },
        logout() {
            this.loginStatus = false;
            this.token = null;
            this.userInfo = {};
            localStorage.removeItem('saveUserInfo');
        }
    }
});