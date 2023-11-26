import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import * as path from "path";

import manifest from "./manifest.json";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    VitePWA({
      // custom service worker
      strategies: "injectManifest",
      srcDir: "src",
      filename: "my-service-worker.ts",

      //
      registerType: "autoUpdate",
      // injectRegister: "auto",
      manifest,
      includeAssets: ["favicon.svg", "robots.txt", "apple-touch-icon.png"],
      devOptions: {
        enabled: true,
        type: "module",
      },
      workbox: {
        globPatterns: ["**/*"],
        // globPatterns: ["**/*.{js,css,html}", "**/*.{svg,png,jpg,gif}"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
