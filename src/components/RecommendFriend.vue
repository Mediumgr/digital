<template>
  <div class="recommend__container">
    <div class="gradient-group__recommend">
      <GradientBG :class="classElement" :animationAction="animationAction" />
      <div class="recommend__content">
        <h1 class="recommend__title">Получи 100&nbsp;000&nbsp;₽</h1>
        <p class="recommend__sub-title">Рекомендуй друга в ИТ</p>
        <BaseButton class="recommend__button" @click.stop="goToPage()">
          <div class="recommend__wrapper">
            <span class="recommend__button_text">Заполнить заявку</span>
            <img
              class="recommend__button_img"
              alt="Frame"
              src="../assets/images/recommend/arrow_right.svg"
            />
          </div>
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useGradient } from "./composables/useGradient";

let animationAction = ref();
let classElement = ref("gradientRecommend");

useGradient({ animationAction, classElement });

const goToPage = () => {
  /* regex исключает любые домены, включая локальные */
  const regex =
    /^(https?:\/\/(?:.+\.ru|.+\.com|(?:\d{1,3}\.){3}\d{1,3}|localhost):\d+\/|https?:\/\/.+\.ru\/|https?:\/\/.+\.com\/)/;
  const params = window.location.href.replace(regex, "");
  window.open("https://work.psblab.ru/" + `${params}`, "_blank");
};
</script>

<style lang="scss" scoped>
.recommend {
  &__container {
    margin: 12rem auto;
    @include mq(768) {
      margin: 16rem 4rem;
    }
    @include mq(1440) {
      margin: 20rem 8rem;
    }
  }

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8rem 3.5rem;
    @include mq(768) {
      padding: 0;
    }
    @include mq(1440) {
      padding: 0 30rem;
    }
  }

  &__title {
    color: var(--color-white);
    text-align: center;
    font-size: 4.8rem;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.288rem;
    margin: 0;
    padding-bottom: 1rem;
    @include mq(768) {
      font-size: 9.6rem;
      letter-spacing: -0.576rem;
      padding-bottom: 3rem;
    }
    @include mq(1440) {
      font-size: 15rem;
      letter-spacing: -0.9rem;
      padding-bottom: 4rem;
    }
  }

  &__sub-title {
    color: var(--color-white);
    text-align: center;
    font-size: 2.4rem;
    line-height: 110%;
    opacity: 0.6;
    margin: 0;
    padding-bottom: 4rem;
    @include mq(768) {
      font-size: 3.6rem;
      letter-spacing: -0.072rem;
      padding-bottom: 8rem;
    }
    @include mq(1440) {
      font-size: 6rem;
      line-height: 90%;
      letter-spacing: -0.36rem;
      opacity: 0.7;
    }
  }

  &__button {
    transition: all 200ms ease;
    position: relative;
    overflow: hidden;
    width: 23.3rem;
    height: 6rem;
    padding: 1rem 1rem 1rem 2rem;
    border-radius: 7.3rem;
    border: none;
    outline: none;
    color: var(--color-white);
    background: #4958ff;
    cursor: pointer;

    &:hover {
      box-shadow: 0 1.1rem 3rem rgba(25, 25, 25, 0.25);
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
          15% 88.6% at 35.5% 55.85%,
          #ff4236 0%,
          rgba(142, 84, 245, 0) 155%
        ),
        #424ed1;
      transform: translate(-50%, -50%);
    }

    & > .recommend__wrapper {
      position: relative;
    }

    @include mq(768) {
      width: 34.3rem;
      height: 8.9rem;
      padding: 1rem 2rem 1rem 3rem;
    }
    @include mq(1440) {
      width: 40.6rem;
      height: 10.1rem;
      padding: 1.6rem 1.6rem 1.6rem 3.6rem;
    }

    &_text {
      text-align: center;
      font-size: 1.8rem;
      letter-spacing: -0.036rem;
      @include mq(768) {
        font-size: 2.4rem;
        letter-spacing: -0.048rem;
      }
      @include mq(1440) {
        font-size: 3.2rem;
        letter-spacing: -0.096rem;
      }
    }

    &_img {
      @include mq(768) {
        width: 6.9rem;
      }
    }
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.gradient-group__recommend {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 39.2rem;
  width: 33.5rem;
  overflow: hidden;
  position: relative;
  z-index: 1;
  margin: 0 auto;
  border-radius: 4rem;

  @include mq(768) {
    height: 67.1rem;
    width: 100%;
  }
  @include mq(1440) {
    height: 73.5rem;
  }
}
</style>
