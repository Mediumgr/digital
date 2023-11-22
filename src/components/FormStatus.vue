<template>
  <div v-if="status.server.failure === false && status.connection === true">
    <div class="success__container">
      <img
        src="../assets/images/vacancies/status_good.svg"
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
          src="../assets/images/vacancies/status_bad.svg"
          alt="status Nok"
          class="error__image"
        />
        <p class="error__text">
          Похоже, проблемы с&nbsp;соединением. Попробуй еще раз
        </p>
      </div>
      <button
        class="btn"
        @mousemove="mousemove($event)"
        @touchmove="mousemove($event)"
      >
        <span @click="$emit('resend')">Отправить еще раз</span>
      </button>
    </div>
  </div>

  <div v-if="status.server.failure && status.connection === true">
    <div class="success__container">
      <img
        src="../assets/images/vacancies/status_bad.svg"
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
const emit = defineEmits(["resend"]);
const props = defineProps({
  status: {
    type: Object,
    default: () => {},
  },
});

const mousemove = (e) => {
  let btn = document.querySelector(".btn");
  let x = e.pageX - btn.offsetLeft;
  let y = e.pageY - btn.offsetTop;
  btn.style.setProperty("--x", x / 10 + "rem");
  btn.style.setProperty("--y", y / 1000 + "rem");
};
</script>

<style lang="scss" scoped>
.btn {
  width: 100%;
  color: var(--color-white);
  transition: all 200ms ease;
  position: relative;
  background: #13144b;
  padding: 2rem;
  border-radius: 2rem;
  outline: none;
  border: none;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0.1rem 0.1rem 0 rgba(25, 25, 25, 0.25);
  font-size: 1.3rem;
  line-height: 120%;
  letter-spacing: -0.026000000000000002rem;
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
        15% 88.6% at 40.5% 25.85%,
        #ff4236 0%,
        rgba(142, 84, 245, 0) 155%
      ),
      #424ed1;
    transform: translate(-50%, -50%);
  }

  & > span {
    position: relative;
  }

  @include mq(768) {
    font-size: 1.6rem;
    line-height: 120%;
    letter-spacing: -0.032rem;
  }

  @include mq(1440) {
    line-height: 140%;
    letter-spacing: -0.064rem;
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
