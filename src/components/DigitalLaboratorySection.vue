<template>
  <footer class="digital-laboratory">
    <GradientBG />

    <h2 class="digital-laboratory__title heading-h1">
      ПСБ цифровая <br> лаборатория
    </h2>

    <div class="digital-laboratory__text">
      <div class="digital-laboratory__psb">© ПСБ</div>

      <a href="mailto:BIT_communications@psbank.ru"  class="digital-laboratory__link">
        Почта
      </a>
    </div>
  </footer>
</template>

<script setup>
import GradientBG from "@/components/GradientBG.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/styles/components/digital-laboratory";
</style>
