import { createApp } from "vue";
import "normalize.css";
import "./assets/css/base.css";
import App from "./App.vue";
import router from "./router/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import pinia from "./stores/index";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

createApp(App).use(ElementPlus).use(router).use(pinia).mount("#app");
