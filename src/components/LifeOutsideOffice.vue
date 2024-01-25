<template>
  <div class="life" ref="block">
    <h1 class="life_header-text" ref="headerText">
      Жизнь команды <br />
      вне офиса
    </h1>
    <div class="life_messages">
      <div
        class="life_messages-dialog"
        v-for="(item, itemIndex) in data.chat"
        :key="itemIndex"
      >
        <div v-if="item.type === 'left'" class="life_messages_left">
          <img
            src="../assets/images/life/avatar-1.png"
            class="life_messages-ico"
            alt="avatar"
          />
          <div class="life_messages_left-wrap">
            <div class="life_messages_left-header">
              <p class="life_messages-name">{{ item.name }}</p>
              <p class="life_messages-time">{{ item.time }}</p>
            </div>

            <div class="life_messages_left-list">
              <div
                class="life_messages_msg-group"
                v-for="(message, messagesIndex) in item.messages"
                :key="messagesIndex"
              >
                <div class="life_messages_loader">
                  <span class="life_messages_loader-element"></span>
                  <span class="life_messages_loader-element"></span>
                  <span class="life_messages_loader-element"></span>
                </div>
                <div class="life_messages-msg life_messages_left-msg">
                  {{ message }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="item.type === 'right'" class="life_messages_right">
          <div class="life_messages_right-wrap">
            <div class="life_messages_left-header">
              <p class="life_messages-name">{{ item.name }}</p>
              <p class="life_messages-time">{{ item.time }}</p>
            </div>
            <div class="life_messages_left-list">
              <div
                class="life_messages_msg-group"
                v-for="(messages, messagesIndex) in item.messages"
                :key="messagesIndex"
              >
                <div class="life_messages_loader" style="right: 0">
                  <span class="life_messages_loader-element"></span>
                  <span class="life_messages_loader-element"></span>
                  <span class="life_messages_loader-element"></span>
                </div>
                <div class="life_messages-msg life_messages_right-msg">
                  {{ messages }}
                </div>
              </div>
            </div>
          </div>
          <img
            src="../assets/images/life/avatar-2.png"
            class="life_messages-ico"
            alt="avatar"
          />
        </div>
      </div>
      <div class="life_gallery" ref="gallery">
        <div ref="menu" class="life_gallery-menu">
          <button
            v-for="(gallery, galleryIndex) in data.gallery"
            :key="galleryIndex"
            @click.stop="showGallery($event, gallery.code)"
            class="life_gallery-btn"
          >
            {{ gallery.name }}
          </button>
        </div>

        <div class="life_gallery-wrapper">
          <div
            :class="['life_gallery-' + gallery.code, 'notActive']"
            v-for="(gallery, galleryIndex) in data.gallery"
            :key="galleryIndex"
          >
            <div
              class="life_gallery-item"
              v-for="(item, itemIndex) in gallery.items"
              :key="itemIndex"
            >
              <div
                v-if="item.avatar && item.name && item.pos"
                class="life_gallery-item-header"
              >
                <img
                  class="life_gallery-item-icon"
                  :src="require(`@/assets/images/life/${item.avatar}`)"
                  alt="avatar"
                />
                <div class="life_gallery-item-user">
                  <div class="life_gallery-item-name">{{ item.name }}</div>
                  <div class="life_gallery-item-pos">{{ item.pos }}</div>
                </div>
              </div>
              <div
                v-if="item.desc"
                class="life_gallery-item-desc"
                v-html="item.desc"
              ></div>
              <img
                v-if="item.img"
                class="life_gallery-item-bg"
                alt="avatar"
                :src="require(`@/assets/images/life/${item.img}`)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import json from "../assets/data/life.json";
import { onMounted, ref, watch } from "vue";

const data = json;
let block = ref("");
let menu = ref("");
let gallery = ref("");
let headerText = ref("");
let galleryBtn = ref([]);
let buttonStatus = ref(false);
let startTime = ref(0);
let delayTime = ref(0);

const showGallery = (event, code) => {
  let btn = event.target;

  let sport = block.value.querySelector(".life_gallery-sport");
  let social = block.value.querySelector(".life_gallery-social");
  let gallery = block.value.querySelector(".life_gallery-" + code);
  let galleryItem = gallery.querySelectorAll(".life_gallery-item");
  let allGalleryItems = block.value.querySelectorAll(".life_gallery-item");

  galleryBtn.value.forEach((item) => {
    item.classList.remove("life_gallery-btn-active");
  });
  btn.classList.add("life_gallery-btn-active");

  [sport, social].forEach((item) => {
    item.classList.add("notActive");
  });

  gallery.classList.remove("notActive");
  gallery.style.scrollSnapType = "none";

  allGalleryItems.forEach((item) => {
    item.classList.remove("animated");
  });

  let delay = 0;
  galleryItem.forEach((item) => {
    setTimeout(() => {
      item.classList.add("animated");
    }, delay);
    delay += 60;
  });

  setTimeout(() => {
    gallery.style.scrollSnapType = "x mandatory";
  }, delay + 50);
};

const headerTextObserver = () => {
  let options = {
    rootMargin: "0px 0px -50px 0px",
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { target, isIntersecting } = entry;
      if (isIntersecting) {
        target.classList.add("active");
      }
    });
  }, options);
  observer.observe(headerText.value);
};

const dialogObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { target, isIntersecting } = entry;
      if (isIntersecting) {
        /* Если пользователь остановился на сообщении, то сбрасываем задержку */
        if (startTime.value !== 0) {
          let currentTime = Date.now();
          startTime.value += delayTime.value;

          if (startTime.value < currentTime) {
            delayTime.value = 0;
          }
        }

        startTime.value = Date.now();

        target.style.transitionDelay = `${delayTime.value}ms`;
        target.classList.add("dialog-appearance");

        delayTime.value += 300; // Добавляем задержку после появления диалога

        target
          .querySelectorAll(".life_messages-msg")
          .forEach((item) => animation(item));
      }
    });
  });

  block.value.querySelectorAll(".life_messages-dialog").forEach((item) => {
    observer.observe(item);
  });
};

const animation = (message) => {
  let loader = message.previousElementSibling;

  [loader, message].forEach((el) => {
    el.animate(
      { opacity: "1" },
      {
        duration: 500,
        delay: el === message ? (delayTime.value += 500) : delayTime.value,
        fill: el === message ? "forwards" : "none",
      }
    );
  });

  delayTime.value += 500; // Добавляем задержку после каждого сообщения

  let allMessages = block.value.querySelectorAll(".life_messages-msg");
  let lastMessage = allMessages[allMessages.length - 1];

  if (message === lastMessage) {
    Promise.all(
      message.getAnimations({ subtree: true }).map((animation) => {
        return animation.finished;
      })
    ).then(() => {
      menu.value.classList.add("active");
      buttonStatus.value = true;
    });
  }
};

const mouseGalleryScroll = () => {
  let sport = block.value.querySelector(".life_gallery-sport");
  let social = block.value.querySelector(".life_gallery-social");

  let isDown = false;
  let startX;
  let scrollLeft;

  [sport, social].forEach((item) => {
    item.addEventListener("mousedown", (e) => {
      item.style.scrollSnapType = "none";
      isDown = true;
      startX = e.pageX - item.offsetLeft;
      scrollLeft = item.scrollLeft;
    });
    item.addEventListener("mouseleave", () => {
      isDown = false;
    });
    item.addEventListener("mouseup", () => {
      item.style.scrollSnapType = "x mandatory";
      isDown = false;
    });
    item.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - item.offsetLeft;
      const walk = (x - startX) * 3;
      item.scrollLeft = scrollLeft - walk;
    });
  });
};

watch(
  () => buttonStatus.value,
  (val) => {
    if (val) {
      setTimeout(() => {
        galleryBtn.value[0].click();
      }, 0);
    }
  }
);

onMounted(() => {
  galleryBtn.value = gallery.value.querySelectorAll(".life_gallery-btn");
  headerTextObserver();
  dialogObserver();
  mouseGalleryScroll();
});
</script>

<style lang="scss" scoped>
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(5rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes preloader {
  0% {
    border: 0.5rem solid #d1d1d1;
  }
  100% {
    border: 0.5rem solid #000000;
  }
}

.life {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0rem 2rem;
  gap: 6rem;

  @include mq(768) {
    padding: 0rem 4rem;
    gap: 8rem;
  }
  @include mq(1440) {
    padding: 0rem 8rem;
    gap: 10rem;
  }

  &_header-text {
    color: var(--Eggplant, #13144b);
    text-align: center;
    font-weight: 500;
    font-size: 4.8rem;
    line-height: 90%;
    letter-spacing: -0.288rem;
    opacity: 0;
    transition: opacity 2000ms ease;

    &.active {
      opacity: 1;
    }

    @include mq(768) {
      font-size: 9.6rem;
      letter-spacing: -0.576rem;
    }
    @include mq(1440) {
      font-size: 15rem;
      letter-spacing: -0.9rem;
    }
  }
}
.life_messages {
  display: flex;
  flex-direction: column;
  width: 33.5rem;
  gap: 1.5rem;
  font-size: 1.6rem;
  margin: 0 auto;

  @include mq(768) {
    width: 68.8rem;
    gap: 2rem;
  }
  @include mq(1440) {
    width: 128rem;
  }

  @include mq(2560) {
    width: 100%;
  }

  &-ico {
    position: relative;
    width: 3.6rem;
    height: 3.6rem;

    @include mq(768) {
      width: 6.4rem;
      height: 6.4rem;
    }
    @include mq(1440) {
      width: 8rem;
      height: 8rem;
    }
  }

  &-name {
    font-size: 1.3rem;
    letter-spacing: -0.026rem;
  }

  &-time {
    font-size: 1.3rem;
    opacity: 0.6;

    @include mq(768) {
      font-size: 1.6rem;
      letter-spacing: -0.032rem;
    }

    @include mq(1440) {
      line-height: 140%;
      letter-spacing: -0.064rem;
    }
  }

  &_left-header {
    display: flex;
    gap: 1.2rem;
  }

  &-msg {
    display: flex;
    align-items: flex-start;
    padding: 1rem 1.5rem;
    gap: 1rem;
    opacity: 0;
    font-size: 1.6rem;
    letter-spacing: -0.048rem;

    @include mq(768) {
      padding: 2rem 3rem;
      font-size: 2rem;
      letter-spacing: -0.06rem;
    }

    @include mq(1440) {
      font-size: 2.4rem;
      letter-spacing: -0.072rem;
    }
  }

  &-dialog {
    opacity: 0;
    width: 100%;
    transition: opacity 300ms ease;

    &.dialog-appearance {
      opacity: 1;
    }
  }

  &_left-msg {
    max-width: 50rem;
    background-color: #fff;
    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.07);
    border-radius: 2rem;
    line-height: 120%;

    @include mq(1440) {
      max-width: 59.6rem;
    }
  }

  &_msg-group {
    &:first-child .life_messages_left-msg {
      border-radius: 0 2rem 2rem 2rem;
      justify-content: flex-start;
    }
  }

  &_left-list {
    position: relative;
    gap: 1rem;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
  }

  &_loader {
    border-radius: 2rem;
    background-color: #fff;
    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.07);
    display: flex;
    padding: 0.5rem;
    max-width: 7.5rem;
    position: absolute;
    opacity: 0;

    @include mq(768) {
      padding: 0.7rem;
    }

    @include mq(1440) {
      padding: 1rem;
      max-width: 8rem;
    }

    &-element {
      border-radius: 100%;
      border: 0.5rem solid #d1d1d1;
      margin: 0.2rem;

      @include mq(768) {
        border: 0.3rem solid #d1d1d1;
        margin: 0.3rem;
      }

      @include mq(1440) {
        border: 0.5rem solid #d1d1d1;
        margin: 0.5rem;
      }

      &:nth-child(1) {
        animation: preloader 0.8s ease-in-out alternate infinite;
      }
      &:nth-child(2) {
        animation: preloader 0.8s ease-in-out alternate 0.4s infinite;
      }
      &:nth-child(3) {
        animation: preloader 0.8s ease-in-out alternate 0.8s infinite;
      }
    }
  }
  &_left-wrap {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  &_left {
    display: flex;
    gap: 1rem;

    @include mq(768) {
      gap: 1.6rem;
    }
  }
  &_right-msg {
    border-radius: 2rem 0 2rem 2rem;
    background-color: #fff;
    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.07);
    line-height: 120%;
  }
  &_right-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1.2rem;
  }
  &_right {
    display: flex;
    justify-content: flex-end;
    gap: 1.6rem;
  }
}

.life_gallery {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @include mq(768) {
    gap: 2rem;
    font-size: 2rem;
    padding-left: 8rem;
  }
  @include mq(1440) {
    padding-left: 9.6rem;
  }

  &-item-name {
    font-size: 1.6rem;
    letter-spacing: -0.048rem;

    @include mq(768) {
      font-size: 2rem;
      letter-spacing: -0.06rem;
    }
    @include mq(1440) {
      font-size: 2.4rem;
      letter-spacing: -0.072rem;
    }
  }
  &-menu {
    display: flex;
    gap: 1.2rem;
    opacity: 0;
    transition: opacity 500ms ease;

    &.active {
      opacity: 1;
    }
  }
  &-btn {
    border-radius: 2rem;
    border: 0.1rem solid rgba(19, 20, 75, 0.2);
    padding: 1rem 2rem;
    color: #13144b;
    line-height: 120%;
    cursor: pointer;
    font-size: 1.6rem;
    letter-spacing: -0.048rem;
    background-color: #ffffff;
    color: #13144b;
    transition: all 500ms linear;

    @include mq(768) {
      padding: 2rem 4rem;
      font-size: 2rem;
      letter-spacing: -0.06rem;
    }
    @include mq(1440) {
      font-size: 2.4rem;
      letter-spacing: -0.072rem;
    }

    &:hover {
      border: 0.1rem solid rgba(19, 20, 75, 0.4);
    }
    &-active {
      background-color: #424ed1;
      color: #ffffff;
      border: 0.1rem solid #424ed1 !important;
    }
  }
  &-item {
    border-radius: 2rem;
    height: 30rem;
    min-width: 33.5rem;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    box-sizing: border-box;
    scroll-snap-align: start;

    @include mq(768) {
      height: 40rem;
      min-width: 34.6rem;
    }
    @include mq(1440) {
      min-width: 38.3rem;
      max-width: 38.3rem;
    }

    &.animated {
      animation: slideIn 0.5s ease forwards;
    }

    &:first-child {
      background-color: #424ed1;
      padding: 2.8rem;

      @include mq(1440) {
        padding: 3.4rem;
      }
    }
    &:last-child {
      padding-right: 2.8rem;
    }
    &-bg {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 2rem;
    }
  }
  &-item-icon {
    position: relative;
    border-radius: 50%;
    width: 9.7rem;
    height: 9.7rem;
    object-fit: cover;

    @include mq(768) {
      width: 6.4rem;
      height: 6.4rem;
    }
    @include mq(1440) {
      width: 9.7rem;
      height: 9.7rem;
    }
  }
  &-item-pos {
    opacity: 0.5;
    font-size: 1.3rem;

    @include mq(768) {
      font-size: 1.6rem;
      letter-spacing: -0.032rem;
    }
    @include mq(1440) {
      line-height: 140%;
      letter-spacing: -0.064rem;
    }
  }
  &-item-user {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }
  &-item-header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
  }
  &-item-desc {
    white-space: pre-wrap;
    font-size: 1.6rem;
    line-height: 120%;
    letter-spacing: -0.048rem;

    @include mq(768) {
      font-size: 2rem;
      letter-spacing: -0.06rem;
    }
    @include mq(1440) {
      font-size: 2.4rem;
      letter-spacing: -0.072rem;
    }
  }
  &-sport,
  &-social {
    display: flex;
    gap: 1rem;
    transition: all 0.2s;
    overflow: auto;
    cursor: pointer;
    -ms-overflow-style: none; /* Скрываем scrollbar для IE, Edge и Firefox IE и Edge */
    scrollbar-width: none; /* Скрываем scrollbar для IE, Edge и Firefox Firefox */
    &::-webkit-scrollbar {
      /* Скрываем scrollbar для Chrome, Safari и Opera */
      display: none;
    }

    @include mq(768) {
      gap: 2rem;
    }

    &.notActive {
      display: none !important;
      scroll-snap-type: none !important;
    }
  }
  &-wrapper {
    display: grid;
    margin-right: -4rem;
    min-height: 30rem;
  }
}
</style>
