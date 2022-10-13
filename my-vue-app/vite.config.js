import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import htmlPlugin from 'vite-plugin-index-html';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),htmlPlugin({
    input: './src/main.js',
    preserveEntrySignatures: 'exports-only',
  })],
 

  // 可选，设置模块在 window 上暴露的名称
 
})
