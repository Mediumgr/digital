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
    default: () => {
    },
  },
});
</script>

<style lang="scss" scoped>

.btn {
  width: 25.5rem;
  padding: 2rem;
  border-radius: 2rem;
  outline: none;
  border: none;
  background-color: #13144b;
  color: var(--color-white);
  font-size: 1.3rem;
  letter-spacing: -0.026000000000000002rem;
  cursor: pointer;
  transition: background-color 200ms linear;

  &:hover {
    border-radius: 2.7rem;
    background: radial-gradient(
        35.04% 88.6% at 85.5% 50.85%,
        #ff4236 0%,
        rgba(142, 84, 245, 0) 155%
    ),
    #424ed1;
  }

  @include mq(768) {
    font-size: 1.6rem;
    width: 60.8rem;
    line-height: 120%;
    letter-spacing: -0.032rem;
  }

  @include mq(1440) {
    width: 43.4rem;
    line-height: 140%;
    letter-spacing: -0.064rem;
  }

  @include mq(1920) {
    border-radius: 2.7rem;
    font-size: 2.1rem;
    width: 57.9rem;
    letter-spacing: -0.08499999999999999rem;
  }
}

.error {
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    row-gap: 4rem;
    padding: 4rem;
    border-radius: 2rem;
    background: var(--color-white);
    box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);

    @include mq(1440) {
      height: 66.4rem;
      width: 51.4rem;
      row-gap: 0;
    }
    @include mq(1920) {
      height: 88.5rem;
      width: 68.5rem;
    }
  }

  &__connection {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    @include mq(1024) {
      row-gap: 6rem;
    }
  }

  &__text {
    color: #13144b;
    font-size: 3rem;
    line-height: 100%;
    letter-spacing: -0.12rem;

    @include mq(1024) {
      font-size: 4.8rem;
      line-height: 110%;
      letter-spacing: -0.144rem;
    }
  }

  &__image {
    width: 10.5rem;
    @include mq(1440) {
      width: 15.2rem;
    }
  }
}

.success {
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 4rem;
    row-gap: 4rem;
    border-radius: 2rem;
    background: var(--color-white);
    box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);

    @include mq(1024) {
      row-gap: 6rem;
    }

    @include mq(1440) {
      height: 66.4rem;
      width: 51.4rem;
    }

    @include mq(1920) {
      height: 88.5rem;
      width: 68.5rem;
    }
  }

  &__text {
    color: #13144b;
    font-size: 3rem;
    line-height: 100%;
    letter-spacing: -0.12rem;

    @include mq(1024) {
      font-size: 4.8rem;
      line-height: 110%;
      letter-spacing: -0.144rem;
    }
  }
}
</style>
