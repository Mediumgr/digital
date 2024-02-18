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
button {
  width: 100%;
  border-radius: 2rem;
  background: #13144b;
  color: #fff;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.048rem;
  padding: 2rem;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 200ms ease;

  &:hover {
    background: #424ed1;
    &::before {
      --size: 70vw;
    }
  }
  &::before {
    --size: 0;
    content: "";
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(
        15% 88.6% at 40.5% 25.85%,
        #ff4236 0%,
        rgba(142, 84, 245, 0) 155%
      ),
      #424ed1;
    transform: translate(-50%, -50%);
  }
}
</style>
