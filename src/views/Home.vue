<template>
  <div class="home">
    <Logo />
    <h1>Joni Rämö</h1>
    <p>
      Experienced software developer with more than
      {{ yearsOfExperience }} years of experience developing tailored web and
      mobile applications, primarily using JavaScript/TypeScript.
    </p>
    <router-link to="/blog">Blog</router-link>
  </div>
</template>

<script setup lang="ts">
import Logo from "../components/Logo.vue";

const yearsOfExperience = new Date().getUTCFullYear() - 2017;
</script>

<style scoped>
.home {
  max-width: 45rem;
  margin: 0 auto;
}

p {
  margin-bottom: 2rem;
}
</style>
