import vue from "eslint-plugin-vue";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    "plugin:vue/vue3-essential",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier"
  ),
  {
    plugins: {
      vue,
      prettier,
    },

    languageOptions: {
      globals: {
        ...globals.node,
      },

      ecmaVersion: 2022,
      sourceType: "commonjs",
    },

    rules: {
      "no-console": import.meta.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": import.meta.env.NODE_ENV === "production" ? "warn" : "off",
      "@typescript-eslint/no-explicit-any": "off",
      "vue/multi-word-component-names": "off",
    },
  },
  {
    files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],

    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];
