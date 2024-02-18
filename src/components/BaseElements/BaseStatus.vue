<template>
  <div
    v-if="status.server.failure === false && status.connection === true"
    class="response"
  >
    <div class="success__container">
      <span
        v-if="modalSettings.cross"
        @click.stop="$emit('customEvent', 'close')"
        class="cross"
        >&#65794;</span
      >
      <img
        src="@/assets/images/vacancies/status_good.svg"
        alt="status ok"
        class="success__image"
      />
      <p class="success__text">
        Спасибо за&nbsp;заявку, мы&nbsp;с&nbsp;тобой свяжемся
      </p>
    </div>
  </div>

  <div v-if="status.server.failure === false && status.connection === false">
    <div class="error__container">
      <div class="error__connection">
        <img
          src="@/assets/images/vacancies/status_bad.svg"
          alt="status Nok"
          class="error__image"
        />
        <p class="error__text">
          Похоже, проблемы с&nbsp;соединением. Попробуй еще раз
        </p>
      </div>
      <BaseButton
        class="btn"
        @click.stop="$emit('customEvent', 'changeStatus')"
      >
        <span>Отправить еще раз</span>
      </BaseButton>
    </div>
  </div>

  <div v-if="status.server.failure && status.connection" class="response">
    <div class="success__container">
      <span
        v-if="modalSettings.cross"
        @click.stop="$emit('customEvent', 'close')"
        class="cross"
        >&#65794;</span
      >
      <img
        src="@/assets/images/vacancies/status_bad.svg"
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
import { defineProps, defineEmits } from "vue";

defineEmits(["customEvent"]);
defineProps({
  status: {
    type: Object,
    default: () => {},
  },
  modalSettings: {
    type: Object,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.btn {
  & > span {
    position: relative;
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

.response {
  position: relative;
}

.success {
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2rem;
    row-gap: 2rem;
    border-radius: 2rem;
    background: var(--color-white);
    box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);

    @include mq(425) {
      padding: 4rem;
      row-gap: 4rem;
    }

    @include mq(1024) {
      row-gap: 6rem;
    }

    @include mq(1440) {
      height: 66.4rem;
      width: 51.4rem;
    }

    & .cross {
      position: absolute;
      right: 2rem;
      top: 1rem;
      font-size: 3rem;
      cursor: pointer;
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
