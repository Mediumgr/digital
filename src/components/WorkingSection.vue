<template>
  <div class="working__section">
    <h2 ref="title" class="working__title">
      Вот над чем мы&nbsp;сейчас работаем
    </h2>
    <div ref="frame" class="frame__wrapper">
      <div class="commonStyle working__support">Поддержка подразделений</div>
      <div class="commonStyle working__eco">Экосистема сервисов</div>
      <div class="commonStyle working__projects">
        Проекты для оборонно-промышленного комплекса
      </div>
      <!--
      <div class="commonStyle working__platform">
        Образовательная платформа «Содружество»
      </div>
      -->
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

<script setup>
import { onMounted, ref } from "vue";

const frame = ref(null);
const title = ref(null);

const handleScroll = () => {
  const viewportTop = frame.value.getBoundingClientRect().top;
  if (viewportTop > 400 && viewportTop < 500) {
    title.value.style.opacity = "1";
  } else if (viewportTop > 300 && viewportTop <= 400) {
    title.value.style.opacity = "0.4";
  } else if (viewportTop <= 300) {
    title.value.style.opacity = "0";
  }
};

const intersection = () => {
  let options = {
    rootMargin: "0px 0px -250px 0px",
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { target, isIntersecting } = entry;
      if (isIntersecting) {
        target.classList.add("active");
      }
    });
  }, options);

  let commonStyle = document.querySelectorAll(".commonStyle");
  observer.observe(title.value);
  commonStyle.forEach((el) => observer.observe(el));
};

onMounted(() => {
  document.addEventListener("scroll", () => {
    handleScroll();
  });

  intersection();
});
</script>

<style lang="scss" scoped>
.frame__wrapper {
  grid-gap: 1rem;
  display: flex;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @include mq(768) {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(2, auto);
    grid-template-areas:
      "support eco"
      "projects bank"
      "services clients"
      "substitution credits";
  }
  @include mq(1440) {
    grid-gap: 2.8rem;
    grid-template-columns: repeat(3, auto);
    grid-template-areas:
      "support eco projects"
      "bank bank bank"
      "services clients clients"
      "substitution credits credits";
  }
}

.commonStyle {
  padding: 1.5rem 2rem;
  border-radius: 12rem;
  text-align: center;
  background: var(--color-white);
  box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);
  line-height: 120%;
  letter-spacing: -0.048rem;
  color: #13144b;
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.5s ease;

  @include mq(768) {
    font-size: 2rem;
    letter-spacing: -0.06rem;
    padding: 3rem;
  }
  @include mq(1440) {
    font-size: 2.4rem;
    letter-spacing: -0.072rem;
    padding: 4rem;
  }
}

.working {
  &__section {
    padding: 20rem 2rem;
  }

  &__title {
    position: sticky;
    top: 29rem;
    opacity: 0;
    transition: opacity 0.2s ease-out;
    font-weight: 500;
    color: #13144b;
    text-align: center;
    font-size: 4.8rem;
    font-style: normal;
    line-height: 90%;
    letter-spacing: -0.288rem;
    padding-bottom: 2rem;

    @include mq(375) {
      margin: 0 auto;
      width: 33.5rem;
    }
    @include mq(768) {
      width: 72.8rem;
      font-size: 9.6rem;
      font-weight: 500;
      letter-spacing: -0.576rem;
      padding-bottom: 4rem;
    }
    @include mq(1440) {
      width: 90rem;
    }
  }

  &__support {
    width: 24.8rem;
    @include mq(768) {
      width: 32rem;
      justify-self: end;
      grid-area: support;
      position: relative;
      right: -9rem;
    }
    @include mq(1440) {
      position: static;
      width: 39.1rem;
    }
  }

  &__eco {
    width: 13rem;
    @include mq(768) {
      width: 17.3rem;
      grid-area: eco;
      justify-self: center;
    }
    @include mq(1440) {
      width: 21.6rem;
    }
  }

  &__projects {
    width: 24.7rem;
    @include mq(768) {
      width: 31.8rem;
      justify-self: end;
      grid-area: projects;
      position: relative;
    }
    @include mq(1440) {
      position: static;
      justify-self: start;
      width: 39rem;
    }
  }

  &__platform {
    width: 17.7rem;
    @include mq(768) {
      width: 23.1rem;
      position: relative;
      right: -6rem;
    }
    @include mq(1440) {
      position: relative;
      right: -8.5rem;
      width: 41.5rem;
    }
  }

  &__bank {
    width: 27.2rem;
    @include mq(768) {
      width: 35rem;
      justify-self: center;
      grid-area: bank;
    }
    @include mq(1440) {
      position: relative;
      width: 42.8rem;
    }
  }

  &__services {
    width: 26.2rem;
    @include mq(768) {
      width: 33.8rem;
      grid-area: services;
      position: relative;
      right: -5rem;
    }
    @include mq(1440) {
      right: -13.5rem;
      width: 41.3rem;
    }
  }

  &__substitution {
    width: 22rem;
    @include mq(768) {
      width: 28.4rem;
      justify-self: end;
      grid-area: substitution;
      position: relative;
      right: 2rem;
    }
    @include mq(1440) {
      position: relative;
      right: -5.5rem;
      width: 34.8rem;
    }
  }

  &__clients {
    width: 19.4rem;
    @include mq(768) {
      width: 25.3rem;
      grid-area: clients;
      justify-self: center;
    }
    @include mq(1440) {
      position: relative;
      right: 2.5rem;
      width: 31.1rem;
    }
  }

  &__credits {
    width: 28rem;
    @include mq(768) {
      width: 35.8rem;
      grid-area: credits;
      position: relative;
      right: 2rem;
    }
    @include mq(1440) {
      width: 43.8rem;
      position: relative;
      right: -5.5rem;
    }
  }
}

.active {
  opacity: 1;
}
</style>
