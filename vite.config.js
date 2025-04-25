import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'leave-management' with your actual repo name
export default defineConfig({
  base: '/leave-management/',
  plugins: [react()],
})
