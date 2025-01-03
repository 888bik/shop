import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import { VantResolver } from 'unplugin-vue-components/resolvers';
import Components from "unplugin-vue-components/vite";
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      'element-plus': path.resolve(__dirname, 'node_modules/element-plus'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 后端服务器的地址和端口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'), // 使用 rewrite 方法重写路径
      },
    },
  },
});
