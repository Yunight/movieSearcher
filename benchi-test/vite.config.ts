import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
    ENV_KEY: process.env.VITE_APP_SECRET,
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
