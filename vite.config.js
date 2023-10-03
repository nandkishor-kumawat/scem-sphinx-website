import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [splitVendorChunkPlugin(),react()],
  build: {
    chunkSizeWarningLimit: 10000, // Adjust the limit to your desired value in kilobytes
  },
})
