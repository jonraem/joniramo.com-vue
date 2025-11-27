<template>
  <Toggle v-model="isDarkTheme" />
  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import Toggle from "./components/Toggle.vue";
import "./global.css";

const DARK_THEME_KEY = "darkTheme";

// Get dark theme from localStorage
const getDarkTheme = (): boolean =>
  localStorage.getItem(DARK_THEME_KEY) === "true";
const isDarkTheme = ref(getDarkTheme());

// Apply theme to body
const applyTheme = (isDark: boolean) => {
  document.body.className = isDark ? "dark" : "light";
};

onMounted(() => {
  document.documentElement.lang = "en";
  applyTheme(isDarkTheme.value);
  localStorage.setItem(DARK_THEME_KEY, String(isDarkTheme.value));
});

// If theme is toggled, apply and save to localStorage
watch(isDarkTheme, (newValue) => {
  applyTheme(newValue);
  localStorage.setItem(DARK_THEME_KEY, String(newValue));
});
</script>

<style>
main {
  padding: 20vh 1rem 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
