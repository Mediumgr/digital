<template>
  <MainPage></MainPage>
</template>

<script>
import MainPage from '@/views/MainPage.vue';
import '@/assets/styles/main.scss';
import '@/assets/styles/keyframes.css'
import { heightVH } from "@/helpers";

export default {
  name: 'App',
  components: {
    MainPage,
  },
  mounted() {
    heightVH()
  }
};
</script>

<style lang="scss"></style>
