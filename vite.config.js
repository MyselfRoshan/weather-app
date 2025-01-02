import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/weather-app",
    preview: {
        port: 8000,
        host: true,
    },
})
