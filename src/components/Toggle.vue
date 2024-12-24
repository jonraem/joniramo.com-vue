<template>
  <label class="toggle">
    <input type="checkbox" v-model="model" />
    <span class="slider round"></span>
  </label>
</template>

<script setup lang="ts">
import { defineModel } from "vue";

const model = defineModel();
</script>

<style>
.toggle {
  position: relative;
  display: inline-block;
  width: 64px;
  height: 36px;
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
  background-color: var(--highlight-light);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 28px;
  width: 28px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: var(--highlight-dark);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--highlight-dark);
}

input:checked + .slider:before {
  -webkit-transform: translateX(28px);
  -ms-transform: translateX(28px);
  transform: translateX(28px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
