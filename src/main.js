import { createApp } from "vue";
import "normalize.css";
import "./assets/css/base.css";
import App from "./App.vue";
import router from "./router/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import pinia from "./stores/index";
import vant from "vant";
import "vant/lib/index.css";


const app = createApp(App);

// 注册所有 Element Plus 图标组件，并增加异常处理
try {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
} catch (error) {
  console.error("Error registering Element Plus icons:", error);
}

// 使用单个 Pinia 实例
app.use(ElementPlus).use(router).use(pinia).use(vant).mount("#app");
