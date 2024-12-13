import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [vue()],
  test: {
    include: ["**/*.spec.ts"],
    environment: "jsdom",
    globals: true,
  },
});
