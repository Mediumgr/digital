<template>
  <div v-if="!!status.connection && status.connection === true">
    <div class="success__container">
      <img
        src="../assets/images/status_good.svg"
        alt="status ok"
        class="success__image"
      />
      <p class="success__text">
        Спасибо за&nbsp;заявку, мы&nbsp;с&nbsp;тобой свяжемся
      </p>
    </div>
  </div>

  <div v-if="!!status.connection && status.connection === false">
    <div class="error__container">
      <div class="error__connection">
        <img
          src="../assets/images/status_bad.svg"
          alt="status Nok"
          class="error__image"
        />
        <p class="error__text">
          Похоже, проблемы с&nbsp;соединением. Попробуй еще раз
        </p>
      </div>
      <button class="btn">Отправить еще раз</button>
    </div>
  </div>

  <div v-if="status.server.failure">
    <div class="success__container">
      <img
        src="../assets/images/status_bad.svg"
        alt="status Nok"
        class="success__image"
      />
      <p class="success__text">
        {{ status.server.message }}
      </p>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import { defineProps } from 'vue';
const props = defineProps({
  status: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.btn {
  width: 255px;
  padding: 20px;
  border-radius: 20px;
  outline: none;
  border: none;
  background-color: #13144b;
  color: var(--color-white);
  font-size: 13px;
  letter-spacing: -0.26px;
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

.error {
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    row-gap: 40px;
    padding: 40px;
    border-radius: 20px;
    background: var(--color-white);
    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.07);

    @media screen and (min-width: 1440px) {
      height: 664px;
      width: 514px;
      row-gap: 0;
    }
    @media screen and (min-width: 1920px) {
      height: 885px;
      width: 685px;
    }
  }
  &__connection {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    @media screen and (min-width: 1024px) {
      row-gap: 60px;
    }
  }
  &__text {
    color: #13144b;
    font-size: 30px;
    line-height: 100%;
    letter-spacing: -1.2px;

    @media screen and (min-width: 1024px) {
      font-size: 48px;
      line-height: 110%;
      letter-spacing: -1.44px;
    }
  }
  &__image {
    width: 105px;
    @media screen and (min-width: 1440px) {
      width: 152px;
    }
  }
}

.success {
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;;
    align-items: flex-start;;
    padding: 40px;
    row-gap: 40px;
    border-radius: 20px;
    background: var(--color-white);
    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.07);

    @media screen and (min-width: 1024px) {
      row-gap: 60px;
    }

    @media screen and (min-width: 1440px) {
      height: 664px;
      width: 514px;
    }

    @media screen and (min-width: 1920px) {
      height: 885px;
      width: 685px;
    }
  }

  &__text {
    color: #13144b;
    font-size: 30px;
    line-height: 100%;
    letter-spacing: -1.2px;

    @media screen and (min-width: 1024px) {
      font-size: 48px;
      line-height: 110%;
      letter-spacing: -1.44px;
    }
  }
}
</style>
