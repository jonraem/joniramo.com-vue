<template>
  <router-view />
</template>

<script lang="ts" setup>
import { onMounted } from "vue";

onMounted(() => {
  const app = document.querySelector("#app");
  setTimeout(() => {
    app?.classList.add("visible");
  }, 250);
});
</script>

<style>
#app {
  opacity: 0;
  margin-top: 15vh;
  font-family: "PT Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  line-height: 1.25em;
}

#app.visible {
  animation: fadeIn 1s;
  opacity: 1;
}

a {
  transition: color 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out;
}

a,
a:active {
  color: #ff407b;
}

a:hover {
  color: #fff;
  background-color: #ff407b;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "Inter", sans-serif;
  font-weight: 900;
  letter-spacing: 0.2em;
  text-transform: uppercase;
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
