import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './buildConfig/environments',
  plugins: [react()],
  base: process.env.PUBLIC_URL,
  build: { outDir: process.env.BUILD_PATH },
})
