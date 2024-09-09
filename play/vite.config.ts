import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

const pathSrc = path.resolve(__dirname, 'src')
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名
    alias: {
      '@': pathSrc,
      vue: 'vue/dist/vue.esm-bundler.js', // 新增的代码
    },
  },
  plugins: [vue()],
})
