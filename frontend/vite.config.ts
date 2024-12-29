//@ts-nocheck
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import svgLoader from "vite-svg-loader";
import dotenv from "dotenv";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [vue(), svgLoader()],
    resolve: {
      alias: [
        {
          find: "@",
          replacement: fileURLToPath(new URL("./src", import.meta.url)),
        },
      ],
    },
    css: {
      modules: {
        generateScopedName:
          process.env.APP_ENV == "development"
            ? "[local]_[hash:base64:5]" // With hash to avoid conflicts
            : "[hash:base64:6]", // Short hash for production
      },
      preprocessorOptions: {
        sass: {
          api: "modern-compiler",
          additionalData: `@use '@/styles/_breakpoints.sass' as *`,
        },
      },
    },
  };
});
