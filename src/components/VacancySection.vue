<template>
  <div class="gradient-group__vacancy">
    <GradientBG :class="classElement" :animationAction="animationAction" />
    <div class="vacancy__section">
      <p class="vacancy__title">Вакансии</p>
      <div class="vacancy__container">
        <div
          class="vacancy__card"
          @click.stop="goToPage()"
          @mouseover="mouseover()"
          @mouseleave="mouseleave()"
          @touchstart="mouseover()"
          @touchend="mouseleave()"
        >
          <video
            v-show="videoShow"
            autoplay
            muted
            playsinline
            loop="loop"
            playbackRate="0.5"
          >
            <source
              src="../assets/video/vacancies/hover.mp4"
              type="video/mp4"
            />
          </video>
          <p class="vacancy__look">Посмотреть все вакансии можно здесь</p>
          <div class="vacancy__bottom">
            <p class="vacancy__text">Найти работу</p>
            <div class="vacancy__arrow"></div>
          </div>
        </div>
        <BaseForm />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import BaseForm from "./BaseElements/BaseForm.vue";
import { useGradient } from "./composables/useGradient";

let animationAction = ref();
let classElement = ref("gradientVacancy");
useGradient({ animationAction, classElement });

const videoShow = ref(false);
const mouseover = () => {
  videoShow.value = true;
};
const mouseleave = () => {
  videoShow.value = false;
};

const goToPage = () => {
  window.open("https://job.psbank.ru/vacancies/it-specialists", "_blank");
};

// const backgroundStyle = computed(() => {
//   return initialBackground.value === false
//     ?
//       {
//         "background-image": `url(${require(`@/assets/images/vacancies/${
//           imageURLs.value[currentIndex.value]
//         }`)})`,
//       }
//     : { background: "#424ed1" };
// });

/* загрузка изображения на случай отсутствия интернета */
const preLoadImage = () => {
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onerror = reject;
    img.src = `${require(`@/assets/images/vacancies/status_bad.svg`)}`;
    img.onload = () => resolve(img);
  });
};

onMounted(() => {
  preLoadImage();
});
</script>

<style lang="scss" scoped>
.gradient-group__vacancy {
  position: relative;
  z-index: 1;
}

.vacancy {
  &__section {
    height: 112.6rem;
    position: relative;

    @include mq(768) {
      height: 152.5rem;
    }

    @include mq(1440) {
      height: 130rem;
    }
  }

  &__container {
    margin: 0 auto;
    width: 33.5rem;

    @include mq(768) {
      width: 68.8rem;
    }

    @include mq(1440) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      width: 108.8rem;
    }
  }

  &__title {
    color: var(--color-white, #fff);
    text-align: center;
    font-size: 4.8rem;
    line-height: 90%;
    letter-spacing: -0.288rem;
    padding: 12rem 0 6rem;

    @include mq(768) {
      font-size: 9.6rem;
      line-height: 90%;
      letter-spacing: -0.576rem;
      padding: 16rem 0 8rem;
    }

    @include mq(1440) {
      font-size: 15rem;
      letter-spacing: -0.9rem;
      padding: 20rem 0 10rem;
    }
  }

  &__card {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 2rem;
    height: 25rem;
    margin-bottom: 2rem;
    position: relative;
    border-radius: 2rem;
    overflow: hidden;
    background: #424ed1;
    cursor: pointer;

    @include mq(768) {
      height: 38.5rem;
      width: 68.8rem;
      margin-bottom: 2rem;
    }

    @include mq(1440) {
      height: 66.4rem;
      width: 51.4rem;
      margin-bottom: 0;
    }
  }

  &__look {
    color: var(--color-white, #fff);
    font-size: 3rem;
    line-height: 100%;
    letter-spacing: -0.12rem;
    position: absolute;
    top: 0;
    padding: 2rem;

    @include mq(768) {
      font-size: 4.8rem;
      letter-spacing: -0.096rem;
      padding: 4rem;
    }

    @include mq(1440) {
      font-size: 6.4rem;
      line-height: 94%;
      letter-spacing: -0.256rem;
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    color: var(--color-white, #fff);
    position: absolute;
    bottom: 0;
    width: 100%;
    align-items: center;
    padding: 0 2rem 2rem;

    @include mq(768) {
      padding: 0 4rem 4rem;
    }
  }

  &__text {
    color: var(--color-white, #fff);
    line-height: 120%;
    letter-spacing: -0.048rem;

    @include mq(768) {
      font-size: 2.4rem;
    }
    @include mq(1440) {
      font-size: 3.2rem;
      letter-spacing: -0.096rem;
    }
  }

  &__arrow {
    height: 1.9rem;
    width: 1.9rem;
    background: url("@/assets/images/vacancies/arrow_375.svg") no-repeat;
    background-position: center;

    @include mq(768) {
      width: 2.9rem;
      height: 2.9rem;
      background: url("@/assets/images/vacancies/arrow_765.svg") no-repeat;
    }
    @include mq(1024) {
      height: 3.5rem;
      width: 3.5rem;
    }
    @include mq(1440) {
      height: 3.8rem;
      width: 3.8rem;
      background: url("@/assets/images/vacancies/arrow.svg") no-repeat;
    }
  }
}

video {
  height: inherit;
  width: inherit;
  object-fit: cover;
  border-radius: 2rem;
}

.remove {
  &:hover {
    color: red;
  }
}
</style>
