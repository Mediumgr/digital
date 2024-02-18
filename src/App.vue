<template>
  <router-view />
</template>

<script setup>
import { onMounted } from "vue";
import "@/assets/styles/main.scss";
import "@/assets/styles/keyframes.css";
import { heightVH } from "@/helpers";

onMounted(() => {
  heightVH();
});
</script>
