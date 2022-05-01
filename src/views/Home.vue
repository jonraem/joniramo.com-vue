<template>
  <div class="home">
    <img
      @load="fadeIn"
      class="home-profile"
      alt="Image of Joni"
      src="../assets/circle_joni.png"
    />
    <h1>Joni Rämö</h1>
    <p>Hello, my name is Joni. I'm a web developer.</p>
    <SocialLinks />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SocialLinks from "../components/SocialLinks.vue";

@Options({
  components: {
    SocialLinks,
  },
})
export default class Home extends Vue {
  fadeIn() {
    const app = document.querySelector('#app');
    app?.classList.add('visible')
  }
}
</script>

<style>
.home {
  width: 500px;
  margin: 0 auto;
}

.home-profile {
  width: 125px;
  height: 125px;
  margin: 0 auto;
  display: block;
}

@media only screen and (max-width: 768px) {
  .home {
    width: unset;
  }
}
</style>
