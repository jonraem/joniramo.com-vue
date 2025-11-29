<template>
  <div class="home">
    <h1>Joni Rämö</h1>
    <p>
      Software developer with +{{ yearsOfExperience }} years of experience
      developing tailored web and mobile applications, primarily using
      JavaScript/TypeScript.
    </p>
  </div>
</template>

<script setup lang="ts">
const yearsOfExperience = new Date().getUTCFullYear() - 2016;
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
