<template>
  <div class="home">
    <h1>Welcome</h1>
    <p>
      You have discovered the website of Joni Rämö, a software developer with
      +{{ yearsOfExperience }} years of experience in various projects around
      the web.

      <br />
      <br />

      On this website you will find references of my software development
      ventures and my <router-link to="/blog">blog</router-link> where I discuss
      various technical and non-techical topics. If you have an interesting
      project where I may help you, or if you just want to say hello, send me a
      message!

      <br />
      <br />

      <img
        alt="Picture of Joni Rämö"
        src="../assets/joni-ramo-circle.png"
        loading="eager"
      />
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

img {
  width: 7rem;
  height: 7rem;
}
</style>
