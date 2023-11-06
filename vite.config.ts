import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import pluginChecker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '127.0.0.1'
  },
  plugins: [
    pluginChecker({typescript: true}),
    react(),
    nodePolyfills()
  ],
  resolve: {
    alias: [
      { find: "@adapter", replacement: path.resolve(__dirname, "src/adapter") },
      { find: "@domain", replacement: path.resolve(__dirname, "src/domain") },
      { find: "@presentation", replacement: path.resolve(__dirname, "src/presentation") },
      { find: "@infrastructure", replacement: path.resolve(__dirname, "src/infrastructure") }
    ]
  }
});
