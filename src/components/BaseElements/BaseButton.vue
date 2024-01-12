<template>
  <button
    type="submit"
    ref="buttonRef"
    @mousemove="mousemove($event)"
    @touchmove.passive="mousemove($event)"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { ref } from "vue";
const buttonRef = ref(null);

const mousemove = (e) => {
  const btn = buttonRef.value;
  let x = e.pageX - btn.offsetLeft;
  let y = e.pageY - btn.offsetTop;
  btn.style.setProperty("--x", x / 10 + "rem");
  btn.style.setProperty("--y", y / 1000 + "rem");
};
</script>

<style lang="scss" scoped>
</style>
