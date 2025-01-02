import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/weather-app",
  preview: {
    port: 8000,
    host: true,
  },
})
