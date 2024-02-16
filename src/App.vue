<template>
  <router-view />
</template>

<script>
import "@/assets/styles/main.scss";
import "@/assets/styles/keyframes.css";
import { heightVH } from "@/helpers";

export default {
  name: "App",
  mounted() {
    heightVH();
  },
};
</script>
