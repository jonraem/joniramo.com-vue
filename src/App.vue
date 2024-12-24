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

onMounted(() => {
  document.documentElement.lang = "en";
  document.body.className = "light";
});

const isDarkTheme = ref(false);
watch(isDarkTheme, (newValue) => {
  if (newValue) {
    document.body.className = "dark";
  } else {
    document.body.className = "light";
  }
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
