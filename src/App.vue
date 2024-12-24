<template>
  <Toggle v-model="isDarkTheme" />
  <router-view />
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
#app {
  margin-top: 15vh;
  font-family: "PT Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  line-height: 1.5em;
}

.toggle {
  position: absolute;
  top: 2rem;
  right: 3rem;
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
