<template>
  <div class="home">
    <img
      class="profile-image"
      alt="Image of Joni"
      src="../assets/jr_logo.svg"
    />
    <h1>Joni Rämö</h1>
    <p>
      Experienced software developer with more than
      {{ yearsOfExperience }} years of experience developing tailored web and
      mobile applications, primarily using JavaScript/TypeScript.
    </p>
    <SocialLinks />
    <router-link to="/blog">Blog</router-link>
  </div>
</template>

<script setup lang="ts">
import SocialLinks from "../components/SocialLinks.vue";

const yearsOfExperience = new Date().getUTCFullYear() - 2017;
</script>

<style scoped>
.home {
  width: 575px;
  margin: 0 auto;
}

.profile-image {
  width: 75px;
  height: 75px;
  margin: 0 auto;
  display: block;
}

p {
  margin-bottom: 2rem;
}

@media only screen and (max-width: 768px) {
  .home {
    width: unset;
  }
}
</style>
