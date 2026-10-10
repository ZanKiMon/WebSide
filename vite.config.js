import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages 项目站点挂在仓库子路径下（https://<用户名>.github.io/portfolio/），
  // 构建产物里的资源引用要带上 /portfolio/ 前缀；本地开发仍然用根路径
  base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
  plugins: [react(), tailwindcss()],
})
