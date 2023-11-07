<template>
  <div class="working__section">
    <h2 class="working__title">Вот над чем мы&nbsp;сейчас работаем</h2>
    <div class="frame__wrapper">
      <div class="commonStyle working__support">Поддержка подразделений</div>
      <div class="commonStyle working__eco">Экосистема сервисов</div>
      <div class="commonStyle working__projects">
        Проекты для оборонно-промышленного комплекса
      </div>
      <div class="commonStyle working__platform">
        Образовательная платформа «Содружество»
      </div>
      <div class="commonStyle working__bank">
        Интернет-банк корпоративных клиентов
      </div>
      <div class="commonStyle working__services">
        Микросервисы для среднего и малого бизнеса
      </div>
      <div class="commonStyle working__substitution">Импортозамещение ПО</div>
      <div class="commonStyle working__clients">
        Сервисы для розничных клиентов
      </div>
      <div class="commonStyle working__credits">
        Сервисы оформления кредитов
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.frame__wrapper {
  grid-gap: 10px;
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'support eco'
      'projects platform'
      'bank bank'
      'services clients'
      'substitution credits';
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, auto);
  }
  @media screen and (min-width: 1440px) {
    grid-gap: 28px;
    grid-template-columns: repeat(3, auto);
    grid-template-areas:
      'support eco projects'
      'platform bank bank'
      'services clients clients'
      'substitution credits credits';
  }
}
.commonStyle {
  padding: 15px 20px;
  border-radius: 120px;
  text-align: center;
  background: var(--color-white);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.07);
  line-height: 120%;
  letter-spacing: -0.48px;
  color: #13144b;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    letter-spacing: -0.6px;
    padding: 30px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    letter-spacing: -0.72px;
    padding: 40px;
  }
}
.working {
  &__section {
    padding: 200px 20px;
  }
  &__title {
    color: #13144b;
    text-align: center;
    font-size: 48px;
    font-style: normal;
    line-height: 90%;
    letter-spacing: -2.88px;
    @media screen and (min-width: 375px) {
      padding: 0 30px;
    }
    @media screen and (min-width: 425px) {
      padding: 0 50px;
    }
    @media screen and (min-width: 568px) {
      padding: 0 138px;
    }
    @media screen and (min-width: 595px) {
      padding: 0 153px;
    }
    @media screen and (min-width: 768px) {
      padding: 0 100px;
      font-family: Onest;
      font-size: 96px;
      font-style: normal;
      font-weight: 500;
      line-height: 90%;
      letter-spacing: -5.76px;
    }
    @media screen and (min-width: 1440px) {
      padding: 0 250px;
    }
  }
  &__support {
    width: 248px;
    @media screen and (min-width: 768px) {
      width: 320px;
      justify-self: end;
      grid-area: support;
      position: relative;
      right: -90px;
    }
    @media screen and (min-width: 1440px) {
      position: static;
      width: 391px;
    }
  }
  &__eco {
    width: 130px;
    @media screen and (min-width: 768px) {
      width: 173px;
      grid-area: eco;
      justify-self: center;
    }
    @media screen and (min-width: 1440px) {
      width: 216px;
    }
  }
  &__projects {
    width: 247px;
    @media screen and (min-width: 768px) {
      width: 318px;
      justify-self: end;
      grid-area: projects;
      position: relative;
      right: -60px;
    }
    @media screen and (min-width: 1440px) {
      position: static;
      justify-self: start;
      width: 390px;
    }
  }
  &__platform {
    width: 177px;
    @media screen and (min-width: 768px) {
      width: 231px;
      position: relative;
      right: -60px;
    }
    @media screen and (min-width: 1440px) {
      position: relative;
      right: -85px;
      width: 415px;
    }
  }
  &__bank {
    width: 272px;
    @media screen and (min-width: 768px) {
      width: 350px;
      justify-self: center;
      grid-area: bank;
    }
    @media screen and (min-width: 1440px) {
      position: relative;
      right: 15px;
      width: 428px;
    }
  }
  &__services {
    width: 262px;
    @media screen and (min-width: 768px) {
      width: 338px;
      grid-area: services;
      position: relative;
      right: -70px;
    }
    @media screen and (min-width: 1440px) {
      position: relative;
      right: -135px;
      width: 413px;
    }
  }
  &__substitution {
    width: 220px;
    @media screen and (min-width: 768px) {
      width: 284px;
      justify-self: end;
      grid-area: substitution;
      position: relative;
      right: 20px;
    }
    @media screen and (min-width: 1440px) {
      position: relative;
      right: -55px;
      width: 348px;
    }
  }
  &__clients {
    width: 194px;
    @media screen and (min-width: 768px) {
      width: 253px;
      grid-area: clients;
      justify-self: center;
    }
    @media screen and (min-width: 1440px) {
      position: relative;
      right: 25px;
      width: 311px;
    }
  }
  &__credits {
    width: 280px;
    @media screen and (min-width: 768px) {
      width: 358px;
      grid-area: credits;
      position: relative;
      right: 20px;
    }
    @media screen and (min-width: 1440px) {
      width: 438px;
      position: relative;
      right: -55px;
    }
  }
}
</style>
