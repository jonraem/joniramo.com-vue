<template>
  <label class="toggle">
    <input type="checkbox" v-model="model" />
    <span class="slider round">
      <ToggleIconLight v-if="!model" />
      <ToggleIconDark v-if="model" />
    </span>
  </label>
</template>

<script setup lang="ts">
import ToggleIconLight from "./ToggleIconLight.vue";
import ToggleIconDark from "./ToggleIconDark.vue";
import { defineModel } from "vue";

const model = defineModel();
</script>

<style>
.toggle {
  position: absolute;
  top: 1rem;
  right: 2rem;
  width: 52px;
  height: 28px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--faded-light);
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

body.light .slider:before {
  background-color: var(--background-light);
}

body.dark .slider:before {
  background-color: var(--background-dark);
}

input:checked + .slider {
  background-color: var(--faded-dark);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--faded-dark);
}

input:checked + .slider:before {
  -webkit-transform: translateX(24px);
  -ms-transform: translateX(24px);
  transform: translateX(24px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
