import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
    server: {
      host: true,
      port: 5173,
      strictPort: false
    }
  }

  if (command !== 'serve') {
    config.base = '/tochka_lending/'
  }

  return config
})
