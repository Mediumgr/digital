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
        <button class="recommend__button">
          <p class="recommend__button_text">Заполнить заявку</p>
          <img
            class="recommend__button_img"
            alt="Frame"
            src="../assets/images/arrow_right.svg"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.recommend {
  &__container {
    margin: 120px auto;
    @media screen and (min-width: 768px) {
      margin: 160px 40px;
    }
    @media screen and (min-width: 1440px) {
      margin: 200px 80px;
    }
    @media screen and (min-width: 1920px) {
      margin: 267px 107px;
    }
  }
  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 35px;
    @media screen and (min-width: 768px) {
      padding: 0;
    }
    @media screen and (min-width: 1440px) {
      padding: 0 300px;
    }
    @media screen and (min-width: 1920px) {
      padding: 0 400px;
    }
  }
  &__title {
    color: var(--color-white);
    text-align: center;
    font-size: 48px;
    line-height: 100%;
    letter-spacing: -2.88px;
    margin: 0;
    padding-bottom: 10px;
    @media screen and (min-width: 768px) {
      font-size: 96px;
      letter-spacing: -5.76px;
      padding-bottom: 30px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 150px;
      letter-spacing: -9px;
      padding-bottom: 40px;
    }
    @media screen and (min-width: 1920px) {
      font-size: 200px;
      letter-spacing: -12px;
      padding-bottom: 53px;
    }
  }
  &__sub-title {
    color: var(--color-white);
    text-align: center;
    font-size: 24px;
    line-height: 110%;
    opacity: 0.6;
    margin: 0;
    padding-bottom: 40px;
    @media screen and (min-width: 768px) {
      font-size: 36px;
      letter-spacing: -0.72px;
      padding-bottom: 80px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 60px;
      line-height: 90%;
      letter-spacing: -3.6px;
      opacity: 0.7;
    }
    @media screen and (min-width: 1920px) {
      font-size: 80px;
      letter-spacing: -4.8px;
      padding-bottom: 106px;
    }
  }
  &__button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 233px;
    height: 60px;
    padding: 10px 10px 10px 20px;
    border-radius: 73px;
    border: none;
    outline: none;
    color: var(--color-white);
    background: #4958ff;
    @media screen and (min-width: 768px) {
      width: 343px;
      height: 89px;
      padding: 10px 20px 10px 30px;
    }
    @media screen and (min-width: 1440px) {
      width: 406px;
      height: 101px;
      padding: 16px 16px 16px 36px;
    }
    @media screen and (min-width: 1920px) {
      width: 541px;
      height: 134px;
      padding: 21px 21px 21px 48px;
    }

    &_text {
      text-align: center;
      font-size: 18px;
      letter-spacing: -0.36px;
      @media screen and (min-width: 768px) {
        font-size: 24px;
        letter-spacing: -0.48px;
      }
      @media screen and (min-width: 1440px) {
        font-size: 32px;
        letter-spacing: -0.96px;
      }
      @media screen and (min-width: 1920px) {
        font-size: 43px;
        letter-spacing: -1.28px;
      }
    }
    &_img {
      @media screen and (min-width: 768px) {
        width: 69px;
      }
    }
  }
}
.gradient-group__recommend {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 392px;
  width: 335px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  border-radius: 40px;
  @media screen and (min-width: 768px) {
    height: 671px;
    width: 688px;
  }
  @media screen and (min-width: 1440px) {
    height: 735px;
    width: 1280px;
  }
  @media screen and (min-width: 1920px) {
    height: 981px;
    width: 1707px;
  }
}

.gradient-group__recommend .blue {
  background-color: #733ff5;
  position: absolute;
  top: 0;
  left: 0;
  height: 3000px;
  width: 3000px;
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
  border-radius: 130px;
  position: absolute;

  @media screen and (min-width: 375px) {
    height: 1300px;
    width: 1300px;
    top: -400px;
    left: -400px;
    animation: slideInGradient 1.5s ease forwards,
      gradientPurple_375 8s ease infinite;
  }

  @media screen and (min-width: 768px) {
    height: 1600px;
    width: 1600px;
    top: -400px;
    left: -350px;
    animation: slideInGradient 1.5s ease forwards,
      gradientPurple_768 8s ease infinite;
  }

  @media screen and (min-width: 1024px) {
    height: 2000px;
    width: 2000px;
    top: -700px;
    left: -350px;
    animation: slideInGradient 1.5s ease forwards,
      gradientPurple_1024 8s ease infinite;
  }

  @media screen and (min-width: 1440px) {
    height: 2500px;
    width: 2500px;
    top: -800px;
    left: -500px;
    animation: slideInGradient 1.5s ease forwards,
      gradientPurple_1440 8s ease infinite;
  }

  @media screen and (min-width: 1920px) {
    height: 3000px;
    width: 3000px;
    top: -800px;
    left: -300px;
    animation: slideInGradient 1.5s ease forwards,
      gradientPurple_1920 8s ease infinite;
  }

  @media screen and (min-width: 2560px) {
    top: -1100px;
    left: -600px;
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
  border-radius: 130px;
  position: absolute;

  @media screen and (min-width: 375px) {
    width: 850px;
    height: 850px;
    top: -250px;
    left: -150px;
    animation: slideInGradient 1.5s ease forwards,
      gradientRed_375 8s ease infinite;
  }

  @media screen and (min-width: 768px) {
    width: 1100px;
    height: 1100px;
    top: -300px;
    left: 50px;
    animation: slideInGradient 1.5s ease forwards,
      gradientRed_768 8s ease infinite;
  }

  @media screen and (min-width: 1024px) {
    width: 1500px;
    height: 1500px;
    top: -350px;
    left: 0;
    animation: slideInGradient 1.5s ease forwards,
      gradientRed_1024 8s ease infinite;
  }

  @media screen and (min-width: 1440px) {
    top: -450px;
    left: 350px;
    animation: slideInGradient 1.5s ease forwards,
      gradientRed_1440 8s ease infinite;
  }

  @media screen and (min-width: 1920px) {
    width: 2400px;
    height: 2400px;
    top: -600px;
    left: 100px;
    animation: slideInGradient 1.5s ease forwards,
      gradientRed_1920 8s ease infinite;
  }

  @media screen and (min-width: 2560px) {
    top: -700px;
    left: 800px;
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
  border-radius: 130px;
  position: absolute;

  @media screen and (min-width: 375px) {
    width: 400px;
    height: 400px;
    top: 400px;
    left: 180px;
    animation: slideInGradient 1.5s ease forwards,
      gradientYellow_375 8s ease infinite;
  }

  @media screen and (min-width: 768px) {
    width: 700px;
    height: 700px;
    top: 450px;
    left: 350px;
    animation: slideInGradient 1.5s ease forwards,
      gradientYellow_768 8s ease infinite;
  }

  @media screen and (min-width: 1024px) {
    width: 800px;
    height: 800px;
    top: 350px;
    left: 550px;
    animation: slideInGradient 1.5s ease forwards,
      gradientYellow_1024 8s ease infinite;
  }

  @media screen and (min-width: 1440px) {
    width: 1000px;
    height: 1000px;
    top: 200px;
    left: 950px;
    animation: slideInGradient 1.5s ease forwards,
      gradientYellow_1440 8s ease infinite;
  }

  @media screen and (min-width: 1920px) {
    width: 1500px;
    height: 1500px;
    top: 300px;
    left: 1000px;
    animation: slideInGradient 1.5s ease forwards,
      gradientYellow_1920 8s ease infinite;
  }

  @media screen and (min-width: 2560px) {
    top: 300px;
    left: 1700px;
    animation: slideInGradient 1.5s ease forwards,
      gradientYellow_2560 8s ease infinite;
  }
}
</style>
