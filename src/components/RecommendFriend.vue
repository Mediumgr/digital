<template>
  <div class="recommend__container">
    <div class="gradient-group__recommend">
      <div class="blue"></div>
      <div class="purple"></div>
      <div class="red"></div>
      <div class="yellow"></div>
      <div class="recommend__content">
        <h1 class="recommend__title">Получи 100&nbsp;000&nbsp;₽</h1>
        <p class="recommend__sub-title">Рекомендуй друга в IT</p>
        <button class="recommend__button" @mousemove="mousemove($event)">
          <a
            href="https://work.psblab.ru/"
            class="recommend__link"
            target="_blank"
          >
            <span class="recommend__button_text">Заполнить заявку</span>
            <img
              class="recommend__button_img"
              alt="Frame"
              src="../assets/images/arrow_right.svg"
            />
          </a>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const mousemove = (e) => {
  let btn = document.querySelector(".recommend__button");
  let x = e.pageX - btn.offsetLeft;
  let y = e.pageY - btn.offsetTop;
  btn.style.setProperty("--x", x / 10 + "rem");
  btn.style.setProperty("--y", y / 1000 + "rem");
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

    & > .recommend__link {
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
  &__link {
    color: var(--color-white);
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

.gradient-group__recommend .blue {
  background-color: #733ff5;
  position: absolute;
  top: 0;
  left: 0;
  height: 300rem;
  width: 300rem;
  margin: 0 auto;
  animation: gradientBlue 1.5s ease forwards;
}

.gradient-group__recommend .purple {
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(143, 20, 186) 0%,
    rgba(143, 20, 186, 0.99) 11.79%,
    rgba(143, 20, 186, 0.97) 21.38%,
    rgba(143, 20, 186, 0.93) 29.12%,
    rgba(143, 20, 186, 0.88) 35.34%,
    rgba(143, 20, 186, 0.82) 40.37%,
    rgba(143, 20, 186, 0.75) 44.56%,
    rgba(143, 20, 186, 0.67) 48.24%,
    rgba(143, 20, 186, 0.59) 51.76%,
    rgba(143, 20, 186, 0.5) 55.44%,
    rgba(143, 20, 186, 0.41) 59.63%,
    rgba(143, 20, 186, 0.33) 64.66%,
    rgba(143, 20, 186, 0.24) 70.88%,
    rgba(143, 20, 186, 0.15) 78.62%,
    rgba(143, 20, 186, 0.07) 88.21%,
    rgba(143, 20, 186, 0) 100%
  );
  border-radius: 13rem;
  position: absolute;

  @include mq(375) {
    height: 130rem;
    width: 130rem;
    top: -40rem;
    left: -40rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientPurple_375 8s ease infinite;
  }

  @include mq(768) {
    height: 160rem;
    width: 160rem;
    top: -40rem;
    left: -35rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientPurple_768 8s ease infinite;
  }

  @include mq(1024) {
    height: 200rem;
    width: 200rem;
    top: -70rem;
    left: -35rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientPurple_1024 8s ease infinite;
  }

  @include mq(1440) {
    height: 250rem;
    width: 250rem;
    top: -80rem;
    left: -50rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientPurple_1440 8s ease infinite;
  }

  /*   @include mq(1920) {
    height: 300rem;
    width: 300rem;
    top: -80rem;
    left: -30rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientPurple_1920 8s ease infinite;
  } */

  @include mq(2560) {
    top: -110rem;
    left: -60rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientPurple_2560 8s ease infinite;
  }
}

.gradient-group__recommend .red {
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(255, 80, 48) 0%,
    rgba(254.66, 79.88, 48.43, 0.99) 11.3%,
    rgba(253.67, 79.55, 49.67, 0.97) 21.16%,
    rgba(252.1, 79.01, 51.63, 0.93) 29.76%,
    rgba(250.01, 78.3, 54.24, 0.89) 37.27%,
    rgba(247.46, 77.43, 57.42, 0.83) 43.87%,
    rgba(244.53, 76.43, 61.09, 0.76) 49.76%,
    rgba(241.26, 75.32, 65.17, 0.69) 55.1%,
    rgba(237.73, 74.11, 69.58, 0.61) 60.08%,
    rgba(234.01, 72.84, 74.24, 0.52) 64.88%,
    rgba(230.14, 71.53, 79.07, 0.44) 69.68%,
    rgba(226.21, 70.18, 83.99, 0.35) 74.66%,
    rgba(222.26, 68.84, 88.92, 0.26) 80%,
    rgba(218.37, 67.51, 93.79, 0.17) 85.88%,
    rgba(214.59, 66.22, 98.51, 0.08) 92.49%,
    rgba(211, 65, 103, 0) 100%
  );
  border-radius: 13rem;
  position: absolute;

  @include mq(375) {
    width: 85rem;
    height: 85rem;
    top: -25rem;
    left: -15rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientRed_375 8s ease infinite;
  }

  @include mq(768) {
    width: 110rem;
    height: 110rem;
    top: -30rem;
    left: 5rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientRed_768 8s ease infinite;
  }

  @include mq(1024) {
    width: 150rem;
    height: 150rem;
    top: -35rem;
    left: 0;
    animation: slideInGradient 1.5s ease forwards,
      gradientRed_1024 8s ease infinite;
  }

  @include mq(1440) {
    top: -45rem;
    left: 35rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientRed_1440 8s ease infinite;
  }

  @include mq(1920) {
    width: 240rem;
    height: 240rem;
    top: -60rem;
    left: 10rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientRed_1920 8s ease infinite;
  }

  @include mq(2560) {
    top: -70rem;
    left: 80rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientRed_2560 8s ease infinite;
  }
}

.gradient-group__recommend .yellow {
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(255, 168, 72) 0%,
    rgba(255, 167.23, 71.79, 0.99) 11.31%,
    rgba(255, 165.19, 71.23, 0.97) 21.19%,
    rgba(255, 162, 70.36, 0.93) 29.81%,
    rgba(255, 157.8, 69.22, 0.88) 37.35%,
    rgba(255, 152.71, 67.83, 0.83) 44%,
    rgba(255, 146.84, 66.23, 0.76) 49.92%,
    rgba(255, 140.33, 64.45, 0.69) 55.29%,
    rgba(255, 133.3, 62.54, 0.61) 60.3%,
    rgba(255, 125.88, 60.51, 0.52) 65.12%,
    rgba(255, 118.18, 58.41, 0.43) 69.92%,
    rgba(255, 110.34, 56.27, 0.34) 74.89%,
    rgba(255, 102.47, 54.13, 0.26) 80.21%,
    rgba(255, 94.71, 52.01, 0.17) 86.05%,
    rgba(255, 87.18, 49.96, 0.08) 92.59%,
    rgba(255, 80, 48, 0) 100%
  );
  border-radius: 13rem;
  position: absolute;

  @include mq(375) {
    width: 40rem;
    height: 40rem;
    top: 40rem;
    left: 18rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientYellow_375 8s ease infinite;
  }

  @include mq(768) {
    width: 70rem;
    height: 70rem;
    top: 45rem;
    left: 35rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientYellow_768 8s ease infinite;
  }

  @include mq(1024) {
    width: 80rem;
    height: 80rem;
    top: 35rem;
    left: 55rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientYellow_1024 8s ease infinite;
  }

  @include mq(1440) {
    width: 100rem;
    height: 100rem;
    top: 20rem;
    left: 95rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientYellow_1440 8s ease infinite;
  }

  @include mq(1920) {
    width: 150rem;
    height: 150rem;
    top: 30rem;
    left: 100rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientYellow_1920 8s ease infinite;
  }

  @include mq(2560) {
    top: 30rem;
    left: 170rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientYellow_2560 8s ease infinite;
  }
}
</style>
