<template>
  <div class="specialists">
    <h1 ref="number" class="specialists__number">4000+</h1>
    <h1 ref="specialists" class="specialists__title">специалистов</h1>
    <p ref="info" class="specialists__info_title">
      Мы создаем и совершенствуем сервисы одного из крупнейших банков — ПСБ. Мы
      работаем над разными проектами, не только в финтехе
    </p>
    <p ref="text" class="specialists__info_text">
      Нашими продуктами пользуются миллионы людей. И&nbsp;нам всегда нужны
      классные специалисты, которые усилят команду
    </p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

let number = ref(null);
let specialists = ref(null);
let info = ref(null);
let text = ref(null);

const intersection = () => {
  let options = {
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { target, isIntersecting } = entry;
      if (isIntersecting) {
        target.classList.add("active");
      }
    });
  }, options);

  observer.observe(number.value);
  observer.observe(specialists.value);
  observer.observe(text.value);
  observer.observe(info.value);
};

onMounted(() => {
  intersection();
});
</script>

<style lang="scss" scoped>
.specialists {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 12rem 0 6rem;

  @include mq(375) {
    padding: 0 2rem;
  }
  @include mq(768) {
    margin: 16rem 0 8rem;
  }
  @include mq(1024) {
    padding: 0;
    margin: 16rem auto 18rem;
    width: 100rem;
  }
  @include mq(1440) {
    margin: 20rem auto 20rem;
  }
  @include mq(1920) {
    margin: 30rem auto 26rem;
    width: 133rem;
  }

  &__number {
    background: var(
      --Gradient,
      linear-gradient(86deg, #8e54f5 1.34%, #ff4236 48.48%, #ffb55c 95.63%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 4.8rem;
    line-height: 90%;
    font-weight: 500;
    letter-spacing: -0.288rem;
    text-align: center;
    opacity: 0;
    transition: opacity 2.5s ease;

    &.active {
      opacity: 1;
    }

    @include mq(768) {
      font-size: 9.6rem;
      letter-spacing: -0.576rem;
    }
    @include mq(1440) {
      font-size: 15rem;
      letter-spacing: -0.9rem;
    }
  }

  &__title {
    font-size: 4.8rem;
    font-weight: 500;
    line-height: 90%;
    letter-spacing: -0.288rem;
    text-align: center;
    padding-bottom: 2rem;
    opacity: 0;
    transition: opacity 2.5s ease;
    &.active {
      opacity: 1;
    }

    @include mq(768) {
      font-size: 9.6rem;
      letter-spacing: -0.576rem;
      padding-bottom: 4rem;
    }
    @include mq(1440) {
      font-size: 15rem;
      letter-spacing: -0.9rem;
      padding-bottom: 6rem;
    }
  }

  &__info {
    &_title {
      color: #13144b;
      text-align: center;
      opacity: 0;
      font-size: 1.8rem;
      line-height: 120%;
      letter-spacing: -0.036rem;
      opacity: 0;
      transition: opacity 2.5s ease;

      &.active {
        opacity: 0.8;
      }

      @include mq(768) {
        font-size: 2.4rem;
        letter-spacing: -0.048rem;
        padding-bottom: 4rem;
      }
      @include mq(1440) {
        font-size: 3.2rem;
        letter-spacing: -0.096rem;
      }
    }

    &_text {
      color: #13144b;
      text-align: center;
      opacity: 0;
      font-size: 1.8rem;
      line-height: 120%;
      letter-spacing: -0.036rem;
      opacity: 0;
      transition: opacity 2.5s ease;

      &.active {
        opacity: 0.8;
      }

      @include mq(768) {
        font-size: 2.4rem;
        letter-spacing: -0.048rem;
      }
      @include mq(1440) {
        font-size: 3.2rem;
        letter-spacing: -0.096rem;
      }
    }
  }
}
</style>
