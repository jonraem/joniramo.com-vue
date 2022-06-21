<template>
  <router-view />
</template>

<style>
#app {
  opacity: 0;
  margin-top: 15vh;
  font-family: "PT Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  line-height: 1.5em;
}

#app.visible {
  animation: fadeIn 1s;
  opacity: 1;
}

a {
  text-decoration: none;
  transition: 0.2s color ease-in-out;
  transition: 0.2s background ease-in-out;
}

a,
a:active {
  color: #ff407b;
}

a:hover {
  color: #fff;
  background: #ff407b;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "Inter", sans-serif;
  font-weight: 900;
  letter-spacing: 0.2em;
  line-height: 1.25em;
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
