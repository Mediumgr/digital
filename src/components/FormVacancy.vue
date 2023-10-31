<template>
  <div class="vacancy__section">
    <p class="vacancy__title">Вакансии</p>
    <div class="vacancy__container">
      <a
        class="vacancy__card"
        target="_blank"
        href="https://habr.com/"
        :style="backgroundStyle"
        @mouseover="mouseover($event)"
        @mouseleave="mouseleave()"
      >
        <p
          class="vacancy__look"
          @mouseover="mouseover($event)"
          @mouseleave="mouseleave()"
        >
          Посмотреть все вакансии можно здесь
        </p>
        <div
          class="vacancy__bottom"
          @mouseover="mouseover($event)"
          @mouseleave="mouseleave()"
        >
          <p class="vacancy__text">Хабр Карьера</p>
          <div class="vacancy__arrow"></div>
        </div>
      </a>
      <form class="form">
        <p class="title">Отправь резюме напрямую</p>
        <input type="text" placeholder="Имя Фамилия" class="name" />
        <input type="text" placeholder="Email" class="email" />
        <input type="text" placeholder="Телефон" class="tel" />
        <!-- <input type="file" placeholder="В формате" class="file" /> -->
        <div class="resume">
          <p class="resume__title">Добавить резюме</p>
          <p class="resume__placeholder">
            В формате DOC, PDF не тяжелее 100 MB
          </p>
        </div>
        <p class="resume__text">
          Нажимая кнопку &laquo;Отправить&raquo;, я&nbsp;соглашаюсь
          на&nbsp;обработку персональных данных и&nbsp;передачу
          их&nbsp;в&nbsp;ПАО &laquo;Промсвязьбанк&raquo;
        </p>
        <button class="resume__btn">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
let imageURLs = ref([
  'vacancy_1.png',
  'vacancy_2.png',
  'vacancy_3.png',
  'vacancy_4.png',
  'vacancy_5.png',
  'vacancy_6.png',
  'vacancy_7.png',
  'vacancy_8.png',
  'vacancy_9.png',
  'vacancy_10.png',
  'vacancy_11.png',
  'vacancy_12.png',
  'vacancy_13.png',
]);
let currentIndex = ref(-1);
let interval = ref(null);
let initialBackground = ref(true);

const mouseover = (event) => {
  if (event.target.classList.contains('vacancy__card')) {
    interval.value = setInterval(() => {
      initialBackground.value = false;
      currentIndex.value = (currentIndex.value + 1) % imageURLs.value.length;
    }, 150);
  }
};
const mouseleave = () => {
  clearInterval(interval.value);
  currentIndex.value = -1;
  initialBackground.value = true;
};

const backgroundStyle = computed(() => {
  return initialBackground.value === false
    ? {
        'background-image': `url(${require(`@/assets/images/${
          imageURLs.value[currentIndex.value]
        }`)})`,
      }
    : { background: '#424ed1' };
});
</script>

<style lang="scss" scoped>
.vacancy {
  &__section {
    height: 1126px;
    background: url('../assets/images/vacancy_375.png');
    background-size: cover;
    @media screen and (min-width: 768px) {
      height: 1525px;
      background: url('../assets/images/vacancy_768.png');
      background-size: cover;
    }
    @media screen and (min-width: 1440px) {
      height: 1840px;
      background: url('../assets/images/vacancy_1440.png');
      background-size: cover;
    }
    @media screen and (min-width: 1440px) {
      height: 1737px;
      background: url('../assets/images/vacancy_1920.png');
      background-size: cover;
    }
  }
  &__container {
    margin: 0 auto;
    width: 335px;
    @media screen and (min-width: 768px) {
      width: 688px;
    }
    @media screen and (min-width: 1440px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      width: 1108px;
      margin-bottom: 200px;
    }
    @media screen and (min-width: 1920px) {
      width: 1450px;
      margin-bottom: 267px;
    }
  }
  &__title {
    color: var(--color-white, #fff);
    text-align: center;
    font-size: 48px;
    line-height: 90%;
    letter-spacing: -2.88px;
    padding: 120px 0 60px;
    @media screen and (min-width: 768px) {
      font-size: 96px;
      line-height: 90%;
      letter-spacing: -5.76px;
      padding: 160px 0 80px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 150px;
      letter-spacing: -9px;
      padding: 200px 0 100px;
    }
    @media screen and (min-width: 1920px) {
      font-size: 200px;
      letter-spacing: -12px;
      padding: 267px 0 133px;
    }
  }
  &__card {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 20px;
    border-radius: 20px;
    height: 250px;
    margin-bottom: 20px;
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (min-width: 768px) {
      padding: 40px;
      height: 405px;
      margin-bottom: 40px;
    }
    @media screen and (min-width: 1440px) {
      height: 664px;
      width: 514px;
      margin-bottom: 0;
    }
    @media screen and (min-width: 1920px) {
      padding: 53px;
      height: 885px;
      width: 685px;
    }
  }
  &__look {
    color: var(--color-white, #fff);
    font-size: 30px;
    line-height: 100%;
    letter-spacing: -1.2px;
    @media screen and (min-width: 768px) {
      font-size: 48px;
      letter-spacing: -0.96px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 64px;
      line-height: 100%;
      letter-spacing: -2.56px;
    }
    @media screen and (min-width: 1920px) {
      letter-spacing: -2.56px;
    }
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
    color: var(--color-white, #fff);
  }
  &__text {
    color: var(--color-white, #fff);
    line-height: 120%;
    letter-spacing: -0.48px;
    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 32px;
      letter-spacing: -0.96px;
    }
  }
  &__arrow {
    height: 19px;
    width: 19px;
    background: url('../assets/images/arrow_375.svg') no-repeat;
    @media screen and (min-width: 768px) {
      width: 29px;
      height: 29px;
      background: url('../assets/images/arrow_765.svg') no-repeat;
    }
    @media screen and (min-width: 1440px) {
      height: 38px;
      width: 38px;
      background: url('../assets/images/arrow.svg') no-repeat;
    }
    @media screen and (min-width: 1920px) {
      height: 51px;
      width: 51px;
      background: url('../assets/images/arrow_1920.svg') no-repeat;
    }
  }
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  background: var(--color-white);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.07);
  @media screen and (min-width: 768px) {
    align-items: start;
    padding: 40px;
  }
  @media screen and (min-width: 1440px) {
    padding: 40px;
    height: 664px;
    width: 514px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1920px) {
    padding: 53px;
    height: 885px;
    width: 685px;
  }
  & .title {
    color: #13144b;
    font-size: 24px;
    line-height: 110%;
    letter-spacing: -0.48px;
    margin-bottom: 20px;
    @media screen and (min-width: 768px) {
      font-size: 36px;
      letter-spacing: -0.72px;
      margin-bottom: 30px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 48px;
      letter-spacing: -1.44px;
      margin-bottom: 25px;
    }
    @media screen and (min-width: 1920px) {
      font-size: 64px;
      letter-spacing: -1.92px;
      margin-bottom: 35px;
    }
  }
  & input {
    padding: 15px 20px;
    width: 295px;
    height: 46px;
    border-radius: 20px;
    border: 1px solid rgba(19, 20, 75, 0.2);
    margin-bottom: 10px;
    @media screen and (min-width: 768px) {
      padding: 20px;
      width: 608px;
      height: 59px;
    }
    @media screen and (min-width: 1440px) {
      padding: 15px 20px;
      width: 434px;
      height: 52px;
      margin-bottom: 0;
    }
    @media screen and (min-width: 1920px) {
      padding: 20px 27px;
      width: 579px;
      height: 60px;
    }
  }
}

.resume {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 295px;
  height: 100px;
  padding: 20px;
  gap: 10px;
  border-radius: 20px;
  border: 1px dashed rgba(19, 20, 75, 0.2);
  @media screen and (min-width: 768px) {
    width: 608px;
  }
  @media screen and (min-width: 1440px) {
    width: 434px;
    height: 94px;
  }
  @media screen and (min-width: 1920px) {
    width: 579px;
    height: 127px;
    padding: 27px;
    border-radius: 27px;
    border: 1.3px dashed rgba(19, 20, 75, 0.2);
  }
  &__title {
    color: #13144b;
    font-size: 13px;
    line-height: 120%;
    letter-spacing: -0.26px;
    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 120%;
      letter-spacing: -0.32px;
    }
    @media screen and (min-width: 1440px) {
      line-height: 140%;
      letter-spacing: -0.64px;
    }
    @media screen and (min-width: 1920px) {
      font-size: 21px;
      letter-spacing: -0.853px;
    }
  }
  &__placeholder {
    color: #13144b;
    opacity: 0.5;
    font-size: 13px;
    line-height: 120%;
    letter-spacing: -0.26px;
    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 120%;
      letter-spacing: -0.32px;
    }
    @media screen and (min-width: 1440px) {
      line-height: 140%;
      letter-spacing: -0.64px;
    }
    @media screen and (min-width: 1920px) {
      font-size: 21px;
      letter-spacing: -0.853px;
    }
  }
  &__text {
    color: #13144b;
    opacity: 0.5;
    font-size: 13px;
    line-height: 120%;
    letter-spacing: -0.26px;
    padding: 10px 0 20px;
    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 120%;
      letter-spacing: -0.32px;
    }
    @media screen and (min-width: 1440px) {
      line-height: 140%;
      letter-spacing: -0.64px;
      padding: 0 0 20px;
    }
    @media screen and (min-width: 1920px) {
      padding: 3px 0 25px;
      font-size: 21px;
      letter-spacing: -0.853px;
    }
  }
  &__btn {
    padding: 20px;
    border-radius: 20px;
    outline: none;
    border: none;
    background-color: #13144b;
    color: var(--color-white);
    font-size: 13px;
    line-height: 120%;
    letter-spacing: -0.26px;
    width: 295px;
    cursor: pointer;
    transition: background-color 200ms linear;
    &:hover {
      border-radius: 27px;
      background: radial-gradient(
          35.04% 88.6% at 85.5% 50.85%,
          #ff4236 0%,
          rgba(142, 84, 245, 0) 155%
        ),
        #424ed1;
    }
    @media screen and (min-width: 768px) {
      font-size: 16px;
      width: 608px;
      line-height: 120%;
      letter-spacing: -0.32px;
    }
    @media screen and (min-width: 1440px) {
      width: 434px;
      line-height: 140%;
      letter-spacing: -0.64px;
    }
    @media screen and (min-width: 1920px) {
      border-radius: 27px;
      font-size: 21px;
      width: 579px;
      letter-spacing: -0.85px;
    }
  }
}
</style>
