<template>
  <div class="wrapper">
    <div ref="shadow" class="shadow" @click.stop="close()"></div>
    <div class="content">
      <div class="content__header">
        <header>
          <img
            class="content__menu_image"
            srcset="@/assets/images/mainblock/logo_1920.svg"
            alt="logo"
          />
          <img
            @click.stop="checked()"
            class="content__menu_burger"
            src="@/assets/images/mainblock/switcher.svg"
          />
        </header>
        <div class="content__menu_links" ref="menuList">
          <ul class="content__menu_list">
            <span class="content__menu_links-line"></span>
            <li class="content__menu_links-item" @click.stop="goToPage('Habr')">
              <p class="link">Хабр</p>
            </li>
            <li
              class="content__menu_links-item"
              @click.stop="goToPage('Rutube')"
            >
              <p class="link">Rutube</p>
            </li>
            <li
              class="content__menu_links-item"
              @click.stop="goToPage('Telega')"
            >
              <p class="link">Телеграм</p>
            </li>
            <li
              class="content__menu_links-item"
              @click.stop="goToPage('Email')"
            >
              <p class="link">Почта</p>
            </li>
          </ul>
        </div>
      </div>
      <p class="content__text">
        Создаем и&nbsp;развиваем сервисы одного из&nbsp;крупнейших
        банков&nbsp;&mdash; ПСБ.<br />Нашими продуктами пользуются миллионы
        людей.
        <br />
        И&nbsp;нам всегда нужны классные специалисты, которые усилят команду
      </p>
    </div>
    <section class="section">
      <p class="section__topTitle" v-html="vacancy.title"></p>
      <div class="section__requirements">
        <div
          class="section__requirements_block"
          v-for="requirement in vacancy.requirements"
          :key="requirement"
        >
          {{ requirement }}
        </div>
      </div>
      <div class="section__box" v-if="vacancy.description">
        <p class="section__title" v-html="vacancy.description.direction"></p>
        <p class="section__text" v-html="vacancy.description.content"></p>
      </div>
      <div class="section__box">
        <p class="section__title">Ключевые задачи:</p>
        <ul class="section__text">
          <li v-for="task in vacancy.tasks" :key="task" v-html="task"></li>
        </ul>
      </div>
      <div class="section__box">
        <p class="section__title">Что важно для нас:</p>
        <ul class="section__text">
          <li v-for="i in vacancy.important" :key="i" v-html="i"></li>
        </ul>
        <template v-if="vacancy.additional">
          <p class="section__title">Будет плюсом:</p>
          <ul class="section__text">
            <li
              v-for="info in vacancy.additional"
              :key="info"
              v-html="info"
            ></li>
          </ul>
        </template>
      </div>
      <div class="section__box">
        <p class="section__title">Что предлагаем:</p>
        <ul class="section__text">
          <li
            v-for="proposal in vacancy.proposals"
            :key="proposal"
            v-html="proposal"
          ></li>
        </ul>
      </div>
    </section>
    <p class="resume__title">Мы ждем ваше резюме</p>
    <div class="resume__content">
      <div class="resume__content_block">
        <p class="resume__content_title">Найти стабильную работу</p>
        <BaseButton @click.stop="openModal()" class="resume__content_btn"
          ><span>ОТПРАВИТЬ РЕЗЮМЕ</span></BaseButton
        >
      </div>
      <div class="resume__content_block">
        <p class="resume__content_title">Получить 100 000 рублей</p>
        <BaseButton
          @click.stop="goToPage('Recommend')"
          class="resume__content_btn"
          ><span>РЕКОМЕНДОВАТЬ ДРУГА</span>
        </BaseButton>
      </div>
    </div>
    <Teleport to="body">
      <Transition name="modal" mode="out-in">
        <div
          v-show="showModal"
          class="modal-wrapper"
          @click.stop="toggleModal($event)"
        >
          <div class="form-wrapper">
            <BaseForm
              :modalSettings="settings"
              @closeModal="toggleModal($event)"
            >
              <template v-slot:cross
                ><span @click.stop="toggleModal('close')" class="cross"
                  >&times;</span
                >
              </template>
            </BaseForm>
          </div>
        </div>
      </Transition>
    </Teleport>
    <footer class="footer">
      <div class="footer__logo" @click.stop="goToPage('Psb')">&copy; ПСБ</div>
      <div class="footer__email" @click.stop="goToPage('Email')">Почта</div>
    </footer>
  </div>
</template>

<script setup>
import data from "@/assets/data/vacancies.json";
import { useRoute } from "vue-router";
import BaseForm from "@/components/BaseElements/BaseForm";
import { onMounted, ref } from "vue";

const route = useRoute();

const { vacancies } = data;
const shadow = ref(null);
const menuList = ref(null);
const showModal = ref(false);
const settings = ref({ cross: true });
let vacancy = ref({});

const openModal = () => {
  showModal.value = true;
  shadow.value.classList.add("active");
  document.body.style.overflow = "hidden";
};

const toggleModal = (event) => {
  let isModalWrapper = event.target?.classList.contains("modal-wrapper");
  let isFormWrapper = event.target?.classList.contains("form-wrapper");
  if (isModalWrapper || isFormWrapper || event === "close") {
    showModal.value = false;
    shadow.value.classList.remove("active");
    document.body.style.overflow = "";
  }
};

const checked = () => {
  menuList.value.classList.add("content__menu_links-active");
  shadow.value.classList.add("active");
};

const close = () => {
  menuList.value.classList.remove("content__menu_links-active");
  shadow.value.classList.remove("active");
};

const goToPage = (link) => {
  switch (link) {
    case "Habr":
      window.open("https://habr.com/ru/companies/psb/articles/", "_blank");
      break;
    case "Rutube":
      window.open("https://rutube.ru/plst/232091", "_blank");
      break;
    case "Telega":
      window.open("https://t.me/+gMDxGmWOkgtjMWZi", "_blank");
      break;
    case "Email":
      window.open("mailto:it@psbdigital.ru", "_blank");
      break;
    case "Recommend":
      window.open("https://work.psblab.ru", "_blank");
      break;
    case "Psb":
      window.open("https://www.psbank.ru", "_blank");
      break;
  }
};

const swipeMenu = () => {
  let startY = 0;
  let threshold = 20; // Пороговое значение для определения смахивания вниз

  menuList.value.addEventListener("touchstart", function (event) {
    startY = event.touches[0].clientY;
  });
  menuList.value.addEventListener("touchmove", function (event) {
    event.preventDefault();
    let currentY = event.touches[0].clientY;
    let distance = currentY - startY;

    if (distance > threshold) {
      close();
    }
  });
};

const fillContent = () => {
  vacancies.forEach((vac) => {
    if (route.name === vac.name) {
      vacancy.value = vac.data;
    }
  });
};

onMounted(async () => {
  swipeMenu();
  fillContent();
});
</script>

<style lang="scss" scoped>
.wrapper {
  background: #fff;
}

ul {
  margin: 0;
  padding-left: 2rem;
  @include mq(768) {
    padding-left: 3rem;
  }
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.content {
  background: url("/src/assets/images/mainblock/gradient.png") center/cover;
  padding: 2rem 2rem 0;
  @include mq(768) {
    padding: 2rem 5rem 0;
  }
  @include mq(1024) {
    padding: 5rem 10rem 0;
  }
  @include mq(1440) {
    padding: 5rem calc(50% - 62rem) 0;
  }
  &__header {
    @include mq(768) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  &__text {
    color: #fff;
    text-align: center;
    line-height: 120%;
    padding: 4rem 0;
    @include mq(768) {
      font-size: 1.8rem;
    }
    @include mq(1024) {
      font-size: 2.26rem;
      padding: 8rem 0;
    }
    @include mq(1440) {
      font-size: 3.2rem;
      letter-spacing: -0.128rem;
    }
  }
  &__menu {
    &_burger {
      width: 3.6rem;
      height: 3.7rem;
      @include mq(768) {
        display: none;
      }
    }
    &_image {
      height: 4.1rem;
      @include mq(1024) {
        height: 6rem;
      }
      @include mq(1440) {
        height: auto;
      }
    }
    &_list {
      color: #fff;
      text-align: center;
      line-height: 140%;
      letter-spacing: -0.0853rem;
      padding: 0;

      @include mq(768) {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        grid-column-gap: 1rem;
      }
    }
    &_links {
      position: fixed;
      width: 100%;
      z-index: 2;
      bottom: -80rem;
      left: 0;
      background: #fff;
      border-top-left-radius: 2rem;
      border-top-right-radius: 2rem;
      transition: bottom 1s ease-out;
      @include mq(768) {
        position: static;
        background: none;
      }
      &-active {
        bottom: 0;
      }
      &-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 29.5rem;
        border-radius: 2rem;
        border: 0.1rem solid rgba(0, 0, 0, 0.2);
        padding: 1.5rem 2rem;
        margin: 2rem auto 2rem;
        text-align: center;
        cursor: pointer;
        transition: all 0.5s ease;

        &:hover {
          background: #fff;
          .link {
            color: #13144b;
            font-weight: 400;
            border: none;
            outline: none;
          }
        }
        &:nth-child(2) {
          animation-delay: 500ms;
        }
        &:nth-child(3) {
          animation-delay: 600ms;
        }
        &:nth-child(4) {
          animation-delay: 700ms;
        }
        &:nth-child(5) {
          animation-delay: 800ms;
        }
        &:last-child {
          margin-bottom: 6rem;
          @include mq(768) {
            margin-bottom: 0;
          }
        }
        @include mq(768) {
          width: auto;
          background: none;
          border: 0.1rem solid rgba(255, 255, 255, 0.2);
          border-radius: 2.7rem;
          padding: 1rem 2rem;
          margin: 0;
        }
        @include mq(1024) {
          padding: 1.33rem 2.7rem;
          min-height: 5.6rem;
        }
        @include mq(1920) {
          min-height: auto;
        }
        > .link {
          line-height: 120%;
          letter-spacing: -0.048rem;
          color: #3a3a54;
          @include mq(768) {
            color: #fff;
          }
          @include mq(1440) {
            line-height: 120%;
            letter-spacing: -0.064rem;
          }
        }
      }
      &-line {
        display: block;
        width: 5.4rem;
        height: 0.6rem;
        border-radius: 3rem;
        background: #d9d9d9;
        margin: 1.5rem auto 0;
        @include mq(768) {
          display: none;
        }
      }
    }
  }
}

.shadow {
  z-index: -1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  backdrop-filter: blur(0.5rem);
  transition: all 1s ease;
  &.active {
    z-index: 1;
    opacity: 1;
    background: rgba(24, 24, 34, 0.4);
  }
}

.modal-wrapper {
  z-index: 2;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
}
.form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68.8rem;
}

.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 3rem 2rem 2rem;
  @include mq(768) {
    padding: 5rem 7rem 4rem;
  }
  @include mq(1024) {
    padding: 8rem 24rem 0;
  }
  @include mq(1440) {
    padding: 8rem 0 0;
    width: 96rem;
    margin: 0 auto;
  }
  &__topTitle {
    font-size: 3rem;
    opacity: 0.8;
    white-space: normal;
    background: linear-gradient(
      86deg,
      #8e54f5 -17.64%,
      #ff4236 30.73%,
      #ffb55c 79.1%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-bottom: 1rem;
    line-height: 120%;

    @include mq(768) {
      font-size: 6rem;
      padding-bottom: 3.2rem;
    }
    @include mq(1024) {
      font-size: 7.5rem;
    }
  }
  &__box {
    display: flex;
    flex-direction: column;
    grid-row-gap: 1rem;
    border-radius: 5rem;
    background: #fff;
    box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);
    padding: 2rem;
    margin-top: 2rem;
    width: 100%;
    @include mq(768) {
      grid-row-gap: 1.6rem;
      padding: 4rem;
    }
    @include mq(1024) {
      padding: 6rem;
    }
  }
  &__title {
    color: #13144b;
    letter-spacing: -0.096rem;
    @include mq(768) {
      font-size: 2rem;
    }
    @include mq(1024) {
      font-size: 2.4rem;
      line-height: 2.85rem;
    }
  }
  &__text {
    font-weight: 400;
    opacity: 0.8;
    letter-spacing: -0.084rem;
    color: #13144b;
    line-height: 120%;
    @include mq(1024) {
      font-size: 2.1rem;
    }
    > li {
      list-style-type: initial;
      color: #13144b;
      opacity: 0.8;
    }
  }
  &__requirements {
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-column-gap: 1rem;
    @include mq(768) {
      flex-direction: row;
      padding-bottom: 2rem;
      grid-column-gap: 2.8rem;
    }
    &_block {
      color: #13144b;
      padding: 1rem;
      letter-spacing: -0.072rem;
      border-radius: 12rem;
      background: #fff;
      box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);
      text-align: center;
      @include mq(768) {
        padding: 2.5rem;
        line-height: 2.85rem;
      }
      @include mq(1024) {
        padding: 2.7rem 3.5rem;
        font-size: 1.8rem;
      }
    }
  }
}

.resume {
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    grid-row-gap: 2rem;
    padding: 2rem 2rem 3rem;
    @include mq(768) {
      padding: 0 7rem 8rem;
    }
    @include mq(1024) {
      flex-direction: row;
      padding: 9rem 18rem 10rem;
      grid-column-gap: 6rem;
    }
    @include mq(1440) {
      grid-column-gap: 8rem;
      padding: 9rem calc(50% - 55rem) 10rem;
    }
    &_block {
      padding: 2rem;
      border-radius: 26px;
      box-shadow: 0 0.67rem 2.67rem 0 #00000012;
      width: 100%;
      @include mq(1024) {
        padding: 3rem;
      }
    }
    &_title {
      font-size: 1.8rem;
      text-align: center;
      background: linear-gradient(
        85.82deg,
        #8e54f5 3.39%,
        #ff4236 50.02%,
        #ffb55c 96.64%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      padding-bottom: 1rem;

      @include mq(768) {
        font-size: 2.8rem;
        line-height: 3.8rem;
        padding-bottom: 2rem;
      }
      @include mq(1440) {
        font-size: 3.3rem;
      }
    }
    &_btn {
      border-radius: 2.6rem;

      @include mq(768) {
        padding: 2.6rem;
      }
      @include mq(1024) {
        font-size: 2rem;
      }
      @include mq(1440) {
        font-size: 2.4rem;
      }
      & > span {
        position: relative;
      }
    }
  }
  &__title {
    padding: 1rem 2rem 0;
    text-align: center;
    font-size: 3.5rem;
    line-height: 90%;

    @include mq(768) {
      padding: 0 7rem 4rem;
      font-size: 8rem;
    }
    @include mq(1024) {
      padding: 7rem 24rem 0;
      font-size: 11rem;
    }
    @include mq(1440) {
      padding: 7rem calc(50% - 55rem) 0;
      font-size: 15rem;
      letter-spacing: -0.9rem;
    }
  }
}

.cross {
  position: relative;
  left: 14rem;
  top: -0.5rem;
  color: #13144b;
  font-size: 3rem;
  cursor: pointer;

  @include mq(768) {
    left: 61rem;
    top: -1.5rem;
  }
  @include mq(1024) {
  }
  @include mq(1440) {
    left: 43rem;
    top: -2.5rem;
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url("/src/assets/images/footer/gradient_footer.png") center/cover;
  padding: 1rem 2rem;
  @include mq(768) {
    padding: 2rem 5rem 2rem;
  }
  @include mq(1024) {
    padding: 2rem 10rem 2rem;
  }
  @include mq(1440) {
    padding: 3.5rem calc(50% - 62rem) 3.5rem;
  }
  &__logo {
    color: #fff;
    letter-spacing: -0.0853rem;
    cursor: pointer;
    @include mq(1024) {
      font-size: 2.13rem;
      line-height: 140%;
    }
  }
  &__email {
    cursor: pointer;
    color: #fff;
    letter-spacing: -0.0853rem;
    @include mq(1024) {
      font-size: 2.13rem;
      line-height: 140%;
    }
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.5s ease-out;
}
.modal-enter-from {
  transform: translateY(-135rem);
}
.modal-leave-to {
  transform: translateY(135rem);
}
</style>
