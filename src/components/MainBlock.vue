<template>
  <div class="container__header">
    <div class="gradient-group" ref="gradientGroup">
      <GradientBG :class="classElement" :animationAction="animationAction" />
    </div>
    <div class="content">
      <div class="content__flex">
        <header class="content__header">
          <picture>
            <source
              srcset="@/assets/images/mainblock/logo.svg"
              media="(min-width: 768px)"
            />
            <img
              src="@/assets/images/mainblock/logo-mobile.svg"
              class="navbar__img"
              alt="logo"
            />
          </picture>
          <img
            @click.stop="checked()"
            class="menu__burger"
            src="@/assets/images/mainblock/switcher.svg"
          />
        </header>
        <div class="section__links" ref="menuList">
          <ul class="menu__list">
            <span class="section__links-line"></span>
            <li class="section__links-item" @click.stop="goToPage('Habr')">
              <a class="link">Хабр</a>
            </li>
            <li class="section__links-item" @click.stop="goToPage('Rutube')">
              <a class="link">Rutube</a>
            </li>
            <li class="section__links-item" @click.stop="goToPage('Telegram')">
              <a class="link">Телеграм</a>
            </li>
            <li class="section__links-item" @click.stop="goToPage('Email')">
              <a class="link">Почта</a>
            </li>
          </ul>
        </div>
      </div>
      <template v-if="showContent">
        <section class="section__text-psb">
          <div class="section__title-psb">
            {{ counterPsb }}
          </div>
        </section>
        <section class="section__text-lab">
          <div class="section__title-lab">
            {{ counterLab }}
          </div>
        </section>
      </template>
      <p class="section__sub-title-lab" v-if="showSubTitle">
        Cоздавай будущее с нами
      </p>
      <div class="substrate" v-if="showBlur" @click.stop="close()"></div>
    </div>
    <div class="video__section" v-show="showVideo">
      <video
        ref="videoPlayer"
        class="videoPlayer"
        autoplay
        muted
        playsinline
        loop="loop"
        :poster="posterSrc"
        preload="auto"
      >
        <source :src="videoSrc" type="video/mp4" />
      </video>
      <div class="wrapper">
        <h1 class="wrapper__title zeroOpacity">Давай знакомиться</h1>
        <div class="wrapper__content zeroOpacity">
          <button
            class="wrapper__projects"
            @mouseover="changeVideoSource('projects')"
            @click.stop="scrollTo('projects')"
          >
            Проекты и стек
          </button>
          <button
            class="wrapper__offices"
            @mouseover="changeVideoSource('offices')"
            @click.stop="scrollTo('offices')"
          >
            Офисы
          </button>
          <button
            class="wrapper__hiring"
            @mouseover="changeVideoSource('hiring')"
            @click.stop="scrollTo('hiring')"
          >
            Этапы найма
          </button>

          <button
            class="wrapper__vacancy"
            @mouseover="changeVideoSource('vacancy')"
            @click.stop="scrollTo('vacancy')"
          >
            Стать частью команды
          </button>

          <button
            class="wrapper__recommend"
            @mouseover="changeVideoSource('recommend')"
            @click.stop="scrollTo('recommend')"
          >
            Привести друга
          </button>
        </div>
        <button
          class="wrapper__arrow zeroOpacity"
          @click.stop="scrollTo('aboutUs')"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useGradient } from "./composables/useGradient";
import { scrollTriggerRefresh } from "@/helpers/gsap";
import { gsap } from "gsap";
const { shuffle } = require("txt-shuffle");

const videoPlayer = ref(null);
const posterSrc = ref("");
const videoSrc = ref(null);
const videoSources = ref({
  vacancy: "mainblock/about.mp4",
  projects: "mainblock/projects.mp4",
  offices: "mainblock/office.mp4",
  hiring: "mainblock/hiring.mp4",
  recommend: "mainblock/life.mp4",
});
const showBlur = ref(false);
const menuList = ref(null);
const showContent = ref(false);
const showSubTitle = ref(false);
const showVideo = ref(false);
const counterPsb = ref(null);
const gradientGroup = ref(null);
const counterLab = ref(null);
const loadingTime = ref(800);
let animationAction = ref(false);
let classElement = ref("gradientHeader");

useGradient({ animationAction, classElement });

const goToPage = (link) => {
  switch (link) {
    case "Habr":
      window.open("https://habr.com/ru/companies/psb/articles/", "_blank");
      break;
    case "Rutube":
      window.open("https://rutube.ru/plst/232091", "_blank");
      break;
    case "Telegram":
      window.open("https://t.me/psb_it_team", "_blank");
      break;
    case "Email":
      window.open("mailto:BIT_communications@psbank.ru", "_blank");
      break;
  }
};

const scrollTo = (value) => {
  let element;
  switch (value) {
    case "offices":
      element = document.querySelector(".map-offices");
      break;
    case "hiring":
      element = document.querySelector(".process_item.process_item_video");
      break;
    case "projects":
      element = document.querySelector(".which-stack-to-use");
      break;
    case "aboutUs":
      element = document.querySelector(".specialists__number");
      break;
    case "vacancy":
      element = document.querySelector(".vacancy__section");
      break;
    case "recommend":
      element = document.querySelector(".recommend__content");
      break;
  }
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: element },
  });
};

shuffle({
  text: "ПСБ цифровая",
  duration: 3,
  fps: 30,
  glyphs: "abcdefhiklmnorstuvwxz0123456789",
  animation: "show",
  delay: 0.2,
  delayResolve: 0.65,
  direction: "right",
  onUpdate: (output) => {
    counterPsb.value = output;
  },
});

shuffle({
  text: "лаборатория",
  duration: 3,
  fps: 30,
  glyphs: "abcdefhiklmnorstuvwxz0123456789",
  animation: "show",
  delay: 0.4,
  delayResolve: 0.65,
  direction: "right",
  onUpdate: (output) => {
    counterLab.value = output;
  },
});

const changeVideoSource = (chapter) => {
  const source = videoSources.value[chapter];
  const isSource = !!source;
  if (isSource) {
    videoPlayer.value.pause();
    videoSrc.value = require(`@/assets/video/${source}`);
    posterSrc.value = require(`@/assets/images/mainblock/${chapter}.jpg`);
    videoPlayer.value.load();
  }
};

const checked = () => {
  menuList.value.classList.add("section__links_active");
  showBlur.value = true;
};

const close = () => {
  menuList.value.classList.remove("section__links_active");
  showBlur.value = false;
};

const showDelayedContent = (ms) => {
  setTimeout(() => {
    showSubTitle.value = true;
    showVideo.value = true;
    // при добавлении видео (.video__section) на страницу изменятся высота страницы
    setTimeout(() => {
      scrollTriggerRefresh();
    }, 250);
  }, 2000 + ms);
};

const holdOnTimer = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const intersectionAnimation = () => {
  let options = {
    rootMargin: "0px 0px -250px 0px",
    threshold: [
      0, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.6, 0.7, 0.75, 0.8,
      0.85, 0.9, 1,
    ],
  };

  let opacity = [1, 0.9, 0.8, 0.7, 0.6, 0.3, 0.2];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { boundingClientRect, isIntersecting, target } = entry;

      if (isIntersecting) {
        const videoClientRectTop = boundingClientRect.top;
        const isTransformClass = target.classList.contains("transformVideo");

        if (videoClientRectTop < 85 && !isTransformClass) {
          target.classList.add("transformVideo");
          Array.from(document.querySelectorAll(".zeroOpacity")).forEach(
            (element) => element.classList.remove("zeroOpacity")
          );
          gradientGroup.value.style.opacity = opacity[opacity.length - 1];
        }

        if (videoClientRectTop > 300) {
          gradientGroup.value.style.opacity = "";
        } else if (videoClientRectTop > 250 && videoClientRectTop < 300) {
          gradientGroup.value.style.opacity = opacity[1];
        } else if (videoClientRectTop > 200 && videoClientRectTop < 250) {
          gradientGroup.value.style.opacity = opacity[2];
        } else if (videoClientRectTop > 150 && videoClientRectTop < 200) {
          gradientGroup.value.style.opacity = opacity[3];
        } else if (videoClientRectTop > 100 && videoClientRectTop < 150) {
          gradientGroup.value.style.opacity = opacity[4];
        } else if (videoClientRectTop > 70 && videoClientRectTop < 100) {
          gradientGroup.value.style.opacity = opacity[5];
        } else if (videoClientRectTop < 70) {
          gradientGroup.value.style.opacity = opacity[opacity.length - 1];
        }
      }
    });
  }, options);
  observer.observe(videoPlayer.value);
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

onMounted(async () => {
  videoSrc.value = require("@/assets/video/mainblock/meet.mp4");
  posterSrc.value = require("@/assets/images/mainblock/meet.jpg");
  videoPlayer.value.load();

  await holdOnTimer(loadingTime.value);
  showContent.value = true;

  let timer = 450;
  setTimeout(() => {
    showDelayedContent(timer);
  }, timer);

  intersectionAnimation();
  swipeMenu();
});
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4rem;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 58.51%
  );
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  &__arrow {
    cursor: pointer;
    animation: moveButton 2s linear infinite;
  }

  &__title {
    display: grid;
    color: var(--color-white);
    font-size: 4.8rem;
    font-weight: 500;
    line-height: 90%;
    letter-spacing: -0.288rem;
    padding-bottom: 3rem;
    text-align: center;
    transition: opacity 2s ease;
    transition-delay: 0.3s;
    width: 27rem;

    @include mq(768) {
      font-size: 9.6rem;
      letter-spacing: -0.576rem;
      padding-bottom: 6rem;
      width: 54rem;
    }
    @include mq(1440) {
      width: 83.8rem;
      font-size: 15rem;
      letter-spacing: -0.9rem;
    }
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 33.5rem;
    grid-gap: 1rem;
    margin-bottom: 11rem;
    transition: all 2s ease;
    transition-delay: 0.3s;

    @include mq(600) {
      margin-bottom: 5rem;
    }

    @include mq(768) {
      display: grid;
      width: 64.6rem;
      grid-gap: 1.6rem;
      margin: 0 auto 19.5rem;
      grid-template-columns: 1fr auto auto 1fr;
      grid-template-areas:
        "hiring offices offices projects"
        "vacancy vacancy recommend recommend";
    }

    @include mq(810) {
      margin: 0px auto 5rem;
    }

    @include mq(930) {
      margin: 0 auto 5.5rem;
    }

    @include mq(1024) {
      margin: 0 auto 19.5rem;
    }

    @include mq(1200) {
      grid-row-gap: 1.6rem;
      grid-column-gap: 1.6rem;
      width: auto;
      height: auto;
      margin-bottom: 7rem;
    }

    button {
      border-radius: 16rem;
      border: 0.2rem solid rgba(255, 255, 255, 0.2);
      background: rgba(255, 255, 255, 0.01);
      backdrop-filter: blur(0.3rem);
      -webkit-backdrop-filter: blur(0.3rem);
      padding: 1.5rem;
      font-size: 1.8rem;
      font-family: Onest, Helvetica, serif;
      line-height: 100%;
      letter-spacing: -0.036rem;
      color: var(--color-white);
      transition: 0.2s;
      text-wrap: nowrap;

      &:hover {
        background: #424ed1;
        cursor: pointer;
        border-color: #424ed1;
        outline: none;
      }

      @include mq(768) {
        font-size: 2.4rem;
        letter-spacing: -0.048rem;
        padding: 3rem;
      }

      @include mq(1200) {
        font-size: 3.2rem;
        letter-spacing: -0.096rem;
        padding: 4rem 6rem;
      }
    }
  }

  &__vacancy {
    background: #424ed1 !important;
    border-color: #424ed1 !important;
    transition: 0.2s;
    grid-area: vacancy;

    &:hover {
      opacity: 0.8;
      outline: none;
    }
  }

  &__recommend {
    background: #424ed1 !important;
    border-color: #424ed1 !important;
    transition: 0.2s;
    grid-area: recommend;

    &:hover {
      opacity: 0.8;
      outline: none;
    }
  }

  &__projects {
    grid-area: projects;
  }

  &__offices {
    grid-area: offices;
  }

  &__hiring {
    grid-area: hiring;
  }

  &__arrow {
    display: grid;
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 5rem;
    background: rgba(255, 255, 255, 0.2)
      url("../assets/images/mainblock/ArrowDown.png") center center no-repeat;

    transition: opacity 2s ease;
    transition-delay: 0.3s;

    @include mq(768) {
      width: 54px;
      height: 54px;
      background-size: 18px;
    }
    @include mq(1440) {
      width: 64px;
      height: 64px;
      background-size: 21px;
    }
    @include mq(1920) {
      width: 76px;
      height: 76px;
      background-size: 25px;
    }
  }
}

.zeroOpacity {
  opacity: 0;
}

.navbar__img {
  width: 14.1rem;
  height: auto;

  @include mq(768) {
    width: 17.6rem;
  }
}

.container__header {
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
}

.section {
  &__text-psb {
    padding: 7rem 0 0;
    color: var(--color-white);
    overflow: hidden;
    margin: 0 auto;
    padding-bottom: 5px;

    @include mq(768) {
      width: 62rem;
      height: 21.2rem;
      padding: 12.5rem 0 0;
    }

    @include mq(1440) {
      width: 96.8rem;
      padding: 8rem 0 0;
    }
  }

  &__title-psb {
    font-size: 4.7rem;
    line-height: 90%;
    padding-left: 4px; // для Samsung
    white-space: nowrap;

    @include mq(375) {
      padding-left: 0;
    }
    @include mq(425) {
      font-size: 4.6rem;
    }
    @include mq(590) {
      font-size: 4.58rem;
    }
    @include mq(660) {
      font-size: 4.54rem;
    }
    @include mq(768) {
      font-size: 9.6rem;
      letter-spacing: -0.576rem;
    }

    @include mq(1440) {
      font-size: 15rem;
      line-height: 90%;
      letter-spacing: -0.9rem;
    }
  }

  &__text-lab {
    color: var(--color-white);
    margin: 0 auto;
    overflow: hidden;

    @include mq(375) {
      height: 4.4rem;
      width: 29.7rem;
    }
    @include mq(768) {
      height: 8.6rem;
      width: 54rem;
    }
    @include mq(1024) {
      height: 8.9rem;
    }
    @include mq(1440) {
      height: 13.6rem;
      width: 84.6rem;
    }
  }

  &__title-lab {
    font-size: 4.8rem;
    line-height: 90%;
    white-space: nowrap;
    padding-left: 20px; // для Samsung

    @include mq(375) {
      padding-left: 0;
    }
    @include mq(768) {
      font-size: 9.6rem;
      letter-spacing: -0.576rem;
    }
    @include mq(1440) {
      font-size: 15rem;
      line-height: 90%;
      letter-spacing: -0.9rem;
    }
  }

  &__sub-title-lab {
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 6rem;
    font-size: 1.8rem;
    line-height: 120%;
    letter-spacing: -0.036rem;
    opacity: 0.6;
    color: var(--color-white);

    @include mq(768) {
      padding-top: 3rem;
      font-size: 2.4rem;
      letter-spacing: -0.048rem;
      padding-bottom: 9rem;
    }

    @include mq(1440) {
      font-size: 3.2rem;
      letter-spacing: -0.096rem;
      padding-bottom: 11rem;
    }

    @include mq(1920) {
      padding: 4rem 0 10.7rem;
    }
  }

  &__links {
    position: fixed;
    width: 100%;
    z-index: 2;
    bottom: -80rem;
    left: 0;
    background: #fff;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    transition: all 1s ease-out;

    @include mq(768) {
      position: static;
      width: auto;
      background: none;
    }

    &_active {
      bottom: 0;
    }

    &-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 29.5rem;
      border-radius: 2rem;
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 1.5rem 2rem;
      margin: 2rem auto 2rem;
      text-align: center;
      cursor: pointer;
      opacity: 0;
      animation: opacityShow 800ms ease-out forwards;

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

      @include mq(768) {
        width: auto;
        background: none;
        border: 0.1rem solid rgba(255, 255, 255, 0.2);
        padding: 1rem 2rem;
        margin: 0;
      }

      @include mq(1920) {
        border-radius: 2.7rem;
      }

      &:last-child {
        margin-bottom: 6rem;

        @include mq(768) {
          margin: 0;
        }
      }

      > .link {
        line-height: 120%;
        letter-spacing: -0.048rem;
        color: #3a3a54;

        @include mq(768) {
          color: var(--color-white);
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

.menu {
  &__list {
    padding: 0;

    @include mq(768) {
      display: grid;
      grid-template-columns: repeat(4, auto);
      align-content: start;
      grid-column-gap: 1rem;
    }
  }
  &__burger {
    width: 3.6rem;
    height: 3.7rem;
    @include mq(768) {
      display: none;
    }
  }
}

.content {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  padding: 4rem 1rem 0 1rem;

  @include mq(375) {
    padding: 4rem 2rem 0 2rem;
  }

  @include mq(768) {
    padding: 2rem 4rem 0;
  }

  @include mq(1024) {
    padding: 2rem 16.6rem 0;
  }

  @include mq(1440) {
    padding: 4rem 8rem 0;
  }

  &__flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0;

    @include mq(768) {
      padding: 2rem 4rem 0;
    }

    @include mq(1024) {
      padding: 2rem 16.6rem 0;
    }

    @include mq(1440) {
      padding: 4rem 8rem 0;
    }

    @include mq(425) {
      flex-direction: column;
      justify-content: center;
    }
    @include mq(768) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 0;
    animation: opacityShow 800ms ease-out forwards;
    width: 100%;

    &__img {
      height: 3.7rem;
      width: 14.1rem;

      @include mq(768) {
        width: 17.6rem;
        height: auto;
      }
    }
  }
}

.video__section {
  margin-top: -47.7rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: slideInVideo 1s ease-out forwards;

  @include mq(425) {
    margin-top: -48.3rem;
  }
  @include mq(768) {
    margin-top: -48.4rem;
  }
  @include mq(1024) {
    margin-top: -48rem;
  }
  @include mq(1080) {
    margin-top: -44rem;
  }
  @include mq(1120) {
    margin-top: -41.2rem;
  }
  @include mq(1160) {
    margin-top: -38.6rem;
  }
  @include mq(1200) {
    margin-top: -36.2rem;
  }
  @include mq(1250) {
    margin-top: -35.7rem;
  }
  @include mq(1440) {
    margin-top: -26rem;
  }
  @include mq(1920) {
    margin-top: -25.4rem;
  }

  video {
    object-fit: cover;
    width: 33.5rem;
    height: 50rem;
    border-radius: 4rem;

    @include mq(390) {
      width: 34.9rem;
    }

    @include mq(768) {
      width: 68.8rem;
      height: 77.4rem;
      border-radius: 5rem;
    }

    @include mq(1440) {
      width: 128rem;
      height: 70rem;
    }
  }
}

.substrate {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  background: rgba(24, 24, 34, 0.4);
  backdrop-filter: blur(0.5rem);
}

.gradient-group {
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  width: 100%;
  transition: all 200ms ease-out;
  height: 81.2rem;

  @include mq(375) {
    height: 81.2rem;
  }

  @include mq(768) {
    height: 102.4rem;
  }

  @include mq(1024) {
    height: 100vh;
  }
  @include mq(1250) {
    height: 90rem;
  }
}

.transformVideo {
  height: 105vh !important;
  width: 120vw !important;
}

.videoPlayer {
  height: auto;
  width: auto;
  transition: height 1s ease-in-out, width 1s ease-in-out;
}
</style>
