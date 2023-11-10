<template>
  <div class="life">
    <div class="life_header">
      <div class="life_header-text">Жизнь команды</div>
      <div class="life_header-text">вне офиса</div>
    </div>
    <div class="life_messages">
      <div class="life_messages-dialog" v-for="(item, itemIndex) in data.chat" v-bind:key="itemIndex">
        <div v-if="item.type=='left'" class="life_messages_left">
          <img src="../assets/images/life/avatar-1.png" class="life_messages-ico">
          <div class="life_messages_left-wrap">
            <div class="life_messages_left-header">
              <div class="life_messages-name">{{ item.name }}</div>
              <div class="life_messages-time">{{ item.time }}</div>
            </div>

            <div class="life_messages_left-list">
              <div class="life_messages_msg-group" v-for="(message, messagesIndex) in item.messages"
                   v-bind:key="messagesIndex">
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
        <div v-if="item.type=='right'" class="life_messages_right">
          <div class="life_messages_right-wrap">
            <div class="life_messages_left-header">
              <div class="life_messages-name">{{ item.name }}</div>
              <div class="life_messages-time">{{ item.time }}</div>
            </div>
            <div class="life_messages_left-list">
              <div class="life_messages_msg-group" v-for="(messages, messagesIndex) in item.messages"
                   v-bind:key="messagesIndex">
                <div class="life_messages_loader" style="right: 0;">
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
          <img src="../assets/images/life/avatar-2.png" class="life_messages-ico">
        </div>
      </div>
      <div class="life_gallery">
        <div class="life_gallery-menu">
          <!--life_gallery-btn-active-->
          <div @click="showGallery($event, gallery.code)" class="life_gallery-btn"
               v-for="(gallery, galleryIndex) in data.gallery" v-bind:key="galleryIndex">
            {{ gallery.name }}
          </div>
        </div>
        <div class="life_gallery-wrapper">
          <div :class="['life_gallery-items', 'life_gallery-'+gallery.code]"
               v-for="(gallery, galleryIndex) in data.gallery" v-bind:key="galleryIndex">
            <div class="life_gallery-item" v-for="(item, itemIndex) in gallery.items"
                 v-bind:key="itemIndex">
              <div v-if="item.avatar && item.name && item.pos" class="life_gallery-item-header">
                <img class="life_gallery-item-icon"
                     :src="require(`@/assets/images/life/${item.avatar}`)"/>
                <div class="life_gallery-item-user">
                  <div class="life_gallery-item-name">{{ item.name }}</div>
                  <div class="life_gallery-item-pos">{{ item.pos }}</div>
                </div>
              </div>
              <div v-if="item.desc" class="life_gallery-item-desc" v-html="item.desc">

              </div>
              <img v-if="item.img" class="life_gallery-item-bg" alt=""
                   :src="require(`@/assets/images/life/${item.img}`)"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import json from '../assets/data/life.json';

import { onMounted, ref } from 'vue';

const data = json;
var slider = ref('');
var block = ref('');
var timingDialog = ref(0);
var timingStart = ref(0);
var galleryBtn = ref([]);


const replayAnimations = (item) => {
  item.getAnimations().forEach((anim) => {
    anim.finish();
    //anim.cancel();
    anim.play();
  });
};

const showGallery = (event, code) => {

  const galleryAll = block.value.querySelectorAll('.life_gallery-items');
  let btn = event.target;
  let gallery = block.value.querySelector('.life_gallery-' + code);
  let galleryItem = gallery.querySelectorAll('.life_gallery-item');

  const btnAll = block.value.querySelectorAll('.life_gallery-btn');

  /* Сбрасываем все стили для кнопок */
  btnAll.forEach((item) => {
    item.classList.remove('life_gallery-btn-active');
  });

  /* Добавляем класс для выбранной кнопки */
  btn.classList.toggle('life_gallery-btn-active');

  let sliderItemsDelay = 0;

  galleryAll.forEach((item) => {
    item.style.display = 'none';
  });

  gallery.style.display = 'flex';


  document.querySelectorAll('.life_gallery-item').forEach((item) => {
    replayAnimations(item);
  });

  galleryItem.forEach((item) => {

    item.animate({ opacity: '1', 'transform': 'translateX(0rem)' }, {
      duration: 500,
      delay: sliderItemsDelay,
      iterations: 1,
      fill: 'forwards'
    });
    sliderItemsDelay += 60;

  });
}
const getEventType = (e) => {
  if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
    var evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
    var touch = evt.touches[0] || evt.changedTouches[0];
    e.pageX = touch.pageX;
  } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover' || e.type == 'mouseout' || e.type == 'mouseenter' || e.type == 'mouseleave') {
    e.pageX = e.clientX;
  }
  return e;
}

const headerTextAnima = (entries, observer) => {
  entries.forEach((entry) => {

    // получаем свойства, которые доступны в объекте entry
    const { target, isIntersecting } = entry;

    if (isIntersecting) {

      target.animate({ opacity: '1' }, {
        duration: 2000,
        iterations: 1,
        fill: 'forwards'
      });

      // Убираем отслеживание
      observer.unobserve(entry.target);
    }

  });
}

const galleryAnima = (entries, observer) => {
  entries.forEach((entry) => {

    // получаем свойства, которые доступны в объекте entry
    const { target, isIntersecting } = entry;

    if (isIntersecting) {

      target.animate({ opacity: '1' }, {
        duration: 1000,
        iterations: 1,
        fill: 'forwards'
      });


      if (galleryBtn.value.length) {
        setTimeout(() => {
          galleryBtn.value[0].click();
        }, 1000);
      }

      // Убираем отслеживание
      observer.unobserve(entry.target);
    }

  });
}

const dialogAnima = (entries, observer) => {
  entries.forEach((entry) => {

    // получаем свойства, которые доступны в объекте entry
    const { target, isIntersecting } = entry;

    if (isIntersecting) {

      /*
      Если пользователь увидел не все сообщения сразу, а остновился на сеередине,
      то нам требуется сбросить задержку для появления диалога, считаем время с начала предадущего диалога,
      прибавляем к задержке и сравниваем с временем показа, если время прошло больше, то задерка не требуется и показываем сразу
       */

      if (timingStart.value) {
        timingStart.value += timingDialog.value;
        let currentTime = Date.now();

        if (timingStart.value < currentTime) {
          timingDialog.value = 0;
        }
      }

      timingStart.value = Date.now();

      let msg = target.querySelectorAll('.life_messages_msg-group');

      target.animate({ opacity: '1' }, {
        duration: 750,
        iterations: 1,
        delay: timingDialog.value,
        fill: 'forwards'
      });

      // Добавляем задержку после появления диалога
      timingDialog.value += 750;

      msg.forEach((item) => {
        let loader = item.querySelector('.life_messages_loader');
        let msg = item.querySelector('.life_messages-msg');

        loader.animate({ opacity: '1' }, {
          duration: 750,
          iterations: 1,
          delay: timingDialog.value,
          fill: 'forwards'
        });
        timingDialog.value += 750;
        msg.animate({ opacity: '1' }, {
          duration: 750,
          iterations: 1,
          delay: timingDialog.value,
          fill: 'forwards'
        });

        // Добавляем задержку после каждого сообщения
        timingDialog.value += 750;
      })

      observer.unobserve(target);
    }

  });
}

onMounted(async () => {

  block.value = document.querySelector('.life');
  const headerText = block.value.querySelectorAll('.life_header-text');
  const dialogs = block.value.querySelectorAll('.life_messages-dialog');
  const gallery = block.value.querySelector('.life_gallery');

  galleryBtn.value = gallery.querySelectorAll('.life_gallery-btn');


  // Отслеживаем вхождение в блок заголовков
  if (headerTextAnima.length) {
    let observerHeaderText = new IntersectionObserver(headerTextAnima, { rootMargin: '0px' });
    headerText.forEach((item) => {
      observerHeaderText.observe(item);
    })
  }

  // Отслеживаем вхождение в блок диалогов
  if (dialogs.length) {
    let observerDialogs = new IntersectionObserver(dialogAnima, { root: null, threshold: [1] });
    dialogs.forEach((item) => {
      observerDialogs.observe(item);
    });
  }

  // Отслеживаем вхождение в блок галерегии
  if (gallery) {
    let observerGallery = new IntersectionObserver(galleryAnima, { root: null, threshold: [1] });
    observerGallery.observe(gallery);
  }


  slider.value = document.querySelectorAll('.life_gallery-items');

  let isDown = false;
  let startX;
  let scrollLeft;

  if (slider.value) {
    slider.value.forEach((item) => {
      item.addEventListener('mousedown', (e) => {
        isDown = true;
        item.classList.add('active');
        startX = e.pageX - item.offsetLeft;
        scrollLeft = item.scrollLeft;
      });
      item.addEventListener('mouseleave', () => {
        isDown = false;
        item.classList.remove('active');
      });
      item.addEventListener('mouseup', () => {
        isDown = false;
        item.classList.remove('active');
      });
      item.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - item.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        item.scrollLeft = scrollLeft - walk;
      });
      item.addEventListener('touchstart', (e) => {
        isDown = true;

        e = getEventType(e);
        item.classList.add('active');
        startX = e.pageX - item.offsetLeft;
        scrollLeft = item.scrollLeft;
      });

      item.addEventListener('touchmove', (e) => {

                e = getEventType(e);
                const x = e.pageX - item.offsetLeft;
                const walk = (x - startX) * 2; //scroll-fast
                item.scrollLeft = scrollLeft - walk;
            });
        })
    }

});
</script>
<style lang="scss" scoped>
@keyframes btnActive {
  0% {
    background-color: #ffffff;
    color: #13144b;
  }
  100% {
    background-color: #424ed1;
    color: #ffffff;
  }
}

.active {
  background: rgba(255, 255, 255, 0.3);
  cursor: grabbing;
}

.life_header {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
}

.life_header-text {
  color: var(--Eggplant, #13144B);
  text-align: center;
  font-size: 3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 90%;
  letter-spacing: -0.288rem;
  opacity: 0;
}


.life_messages-ico {
  position: relative;
  width: 3.6rem;
  height: 3.6rem;
}

.life_messages-name {
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 1.56rem */
  letter-spacing: -0.026000000000000002rem;
}

.life_messages-time {
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.026000000000000002rem;
  opacity: 0.6;
}

.life_messages_left-header {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 1.2rem;
}

.life_gallery-item-name {
  position: relative;
  line-height: 120%;
  font-weight: 500;
  font-size: 1.6rem;
  font-style: normal;
  letter-spacing: -0.048rem;
}


.life_messages_left-msg {
  border-radius: 2rem;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.06rem;
  max-width: 50rem;
  line-height: 120%;
  background-color: #fff;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: row;
  padding: 2rem 3rem;
}

.life_messages_msg-group:first-child .life_messages_left-msg {
  align-self: stretch;
  border-radius: 0 2rem 2rem 2rem;
  align-items: flex-start;
  justify-content: flex-start;
}


.life_messages_left-list {
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;

}


.life_messages_left,
.life_messages_left-header {
  align-items: flex-start;
  justify-content: flex-start;
}

.life_messages_left-wrap {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.life_messages_left {
  gap: 1rem;
}

.life_messages_left,
.life_messages_right-msg-first {
  display: flex;
  flex-direction: row;
}


.life_messages_right-msg {
  border-radius: 2rem 0 2rem 2rem;
  background-color: #fff;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.07);
  align-items: center;
  justify-content: center;
  padding: 2rem 3rem;
  font-size: 2rem;
  letter-spacing: -0.03em;
  line-height: 120%;
  font-weight: 500;
}

.life_messages_right-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 1.2rem;
}


.life_messages_right {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 1.6rem;
}


.life_gallery-menu {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.2rem;
}

.life_gallery-btn {
  border-radius: 2rem;
  border: 0.1rem solid rgba(19, 20, 75, 0.2);
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  color: #13144b;
  line-height: 120%;
  font-weight: 500;
  cursor: pointer;
  font-size: 1.6rem;
  font-style: normal;
  letter-spacing: -0.048rem;
}

.life_gallery-btn:hover {
  border: 0.1rem solid rgba(19, 20, 75, 0.40);
}

.life_gallery-btn-active {

  animation-name: btnActive;
  animation-duration: 500ms;
  animation-fill-mode: forwards
}

.life_gallery-item-icon {
  position: relative;
  border-radius: 50%;
  width: 9.7rem;
  height: 9.7rem;
  object-fit: cover;
}

.life_gallery-item-pos {
  position: relative;
  opacity: 0.5;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.026000000000000002rem;
}

.life_gallery-item-user {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.6rem;
}

.life_gallery-item-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
}

.life_gallery-item-desc {
  position: relative;
  display: inline-block;
  white-space: pre-wrap;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.048rem;
}

.life_gallery-item {
  border-radius: 2rem;
  height: 30rem;
  min-width: 33.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
  opacity: 0;
  transform: translateX(5rem);
}

.life_gallery-item:first-child {
  background-color: #424ed1;
  padding: 2.8rem;
}

.life_gallery-item-bg {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2rem;
}

.life_gallery-items {
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  transition: all 0.2s;
  will-change: transform;
  user-select: none;
  cursor: pointer;

  border-radius: 2rem;
  height: 40rem;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
  display: none;
}

.life_gallery {
  align-self: stretch;
  flex-direction: column;
  gap: 1rem;
  font-size: 2rem;
  color: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  opacity: 0;
}

.life_gallery-wrapper {
  min-height: 40rem;
  display: grid;
}

.life_messages {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 33.5rem;
  gap: 1.5rem;
  text-align: left;
  font-size: 1.6rem;
  margin: 0 auto;
}

.life_messages-dialog {
  opacity: 0;
  width: 100%;
}

.life {
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 12rem 2rem;
  gap: 6rem;
  overflow: hidden;
  display: flex;
}

/* -------------------- Лоадер -------------------- */
.life_messages_loader {
  border-radius: 2rem;
  background-color: #fff;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: row;
  padding: 1rem;
  max-width: 7.5rem;
  position: absolute;
  opacity: 0;
}

.life_messages_loader-element {
  border-radius: 100%;
  border: 0.5rem solid #d1d1d1;
  margin: 0.5rem;
}

.life_messages_loader-element:nth-child(1) {
  animation: preloader .8s ease-in-out alternate infinite;
}

.life_messages_loader-element:nth-child(2) {
  animation: preloader .8s ease-in-out alternate .4s infinite;
}

.life_messages_loader-element:nth-child(3) {
  animation: preloader .8s ease-in-out alternate .8s infinite;
}

@keyframes preloader {
  0% {
    border: 0.5rem solid #d1d1d1;
  }
  100% {
    border: 0.5rem solid #000000;
  }
}

.life_messages-msg {
  display: flex;
  padding: 1rem 1.5rem;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
  opacity: 0;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.048rem;
}

@include mq(768) {

  .life_header {
    width: 100%;
  }

  .life_header-text {
    font-size: 6rem;
    letter-spacing: -0.576rem;
  }


  .life_messages-ico {
    width: 6.4rem;
    height: 6.4rem;
  }

  .life_messages_left-header {
    gap: 1.2rem;
  }

  .life_messages-msg {
    padding: 2rem 3rem;
    font-size: 2rem;
    letter-spacing: -0.06rem;
  }

  .life_gallery-item-name {
    font-size: 2rem;
    letter-spacing: -0.06rem;
  }


  .life_messages_left-msg {

  }

  .life_messages_msg-group:first-child .life_messages_left-msg {
    border-radius: 0 2rem 2rem 2rem;
  }


  .life_messages_left-list {
    gap: 1rem;
    font-size: 2rem;
  }

  .life_messages_left-wrap {
    gap: 1.2rem;
  }

  .life_messages_left {
    gap: 1.6rem;
  }

  .life_messages-name, .life_messages-time {
    font-size: 1.6rem;
    letter-spacing: -0.032rem;
  }

  .life_messages_right-msg {

  }

  .life_messages_right-wrap {
    gap: 1.2rem;
  }


  .life_messages_right {
    gap: 1.6rem;
  }


  .life_gallery-menu {
    gap: 1.2rem;
  }

  .life_gallery-btn {
    padding: 2rem 4rem;
    font-size: 2rem;
    letter-spacing: -0.06rem;
  }


  .life_gallery-item-icon {
    width: 6.4rem;
    height: 6.4rem;
  }

  .life_gallery-item-pos {
    font-size: 1.6rem;
    letter-spacing: -0.032rem;
  }

  .life_gallery-item-user {
    gap: 0.6rem;
  }

  .life_gallery-item-header {
    gap: 1.2rem;
  }

  .life_gallery-item-desc {
    font-size: 2rem;
    letter-spacing: -0.06rem;
  }

  .life_gallery-item {
    border-radius: 2rem;
    height: 40rem;
    opacity: 0;
  }

  .life_gallery-item:first-child {
    background-color: #424ed1;
    padding: 2.8rem;
  }

  .life_gallery-item-bg {
    border-radius: 2rem;
  }


  .life_gallery-items {
    border-radius: 2rem;
    height: 40rem;
    gap: 2rem;
    display: none;
  }

  .life_gallery {
    gap: 2rem;
    font-size: 2rem;
    padding-left: 8rem;
  }


  .life_messages {
    width: 68.8rem;
    gap: 2rem;
    font-size: 1.6rem;
    margin: 0 auto;
  }

  .life {
    padding: 16rem 4rem;
    gap: 8rem;
  }
}

@include mq(1440) {

  .life {
    padding: 20rem 8rem;
    gap: 10rem;
  }

  .life_header-text {
    font-size: 9.3rem;
    letter-spacing: -0.9rem;
  }

  .life_messages-msg {
    display: flex;
    padding: 2rem 3rem;
    align-items: flex-start;
    gap: 1rem;
    align-self: stretch;
    font-size: 2.4rem;
    letter-spacing: -0.072rem;
  }

  .life_messages {
    display: flex;
    width: 128rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
  .life_messages-name, .life_messages-time {
    line-height: 140%;
    letter-spacing: -0.064rem;
  }

  .life_messages-dialog {
    width: 100%;
  }

  .life_messages_left-msg {
    max-width: 59.6rem;
  }

  .life_messages-ico {
    width: 8rem;
    height: 8rem
  }

  /* -------------------- Галерея -------------------- */
  .life_gallery {
    padding-left: 9.6rem;
  }

  .life_gallery-btn {
    font-size: 2.4rem;
    line-height: 120%;
    letter-spacing: -0.072rem;
  }

  .life_gallery-item {
    min-width: 38.3rem;
    height: 40rem;
  }
  .life_gallery-item-icon {
    width: 9.7rem;
    height: 9.7rem;
  }

  .life_gallery-item:first-child {
    padding: 3.4rem;
  }

  .life_gallery-item-name {
    font-size: 2.4rem;
    line-height: 120%;
    letter-spacing: -0.072rem;
  }

  .life_gallery-item-pos {
    font-size: 1.6rem;
    line-height: 140%;
    letter-spacing: -0.064rem;
  }
  .life_gallery-item-desc {
    font-size: 2.4rem;
    line-height: 120%;
    letter-spacing: -0.072rem;
  }
}

@include mq(1920) {

  .life {
    padding: 26.6667rem 10.6667rem;
    gap: 13.3333rem;
  }

  .life_header-text {
    font-size: 12.5rem;
    letter-spacing: -1.2rem;
  }

  .life_messages {
    display: flex;
    width: 170.6rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.77rem;
  }

  .life_messages-msg {
    padding: 2.6667rem 4rem;
    gap: 1.3333rem;
    font-size: 3.2rem;
    letter-spacing: -0.096rem;
  }

  .life_messages-name, .life_messages-time {
    font-size: 2.1332999999999998rem;
    line-height: 140%;
    letter-spacing: -0.0853rem;
  }

  .life_messages-dialog {
    width: 100%;
  }

  .life_messages_left {
    gap: 2.1rem;
  }
  .life_messages_left-list {
    gap: 1.3rem;
  }
  .life_messages_right {
    gap: 2.1rem;
  }
  .life_messages_left-msg {
    max-width: 86rem;
  }

  .life_messages-ico {
    width: 8rem;
    height: 8rem
  }

  /* -------------------- Галерея -------------------- */
  .life_gallery {
    padding-left: 12.7rem;
    gap: 2.6670000000000003rem;
  }

  .life_gallery-btn {
    font-size: 3.2rem;
    letter-spacing: -0.096rem;
    padding: 2.6667rem 5.3332999999999995rem;
    gap: 1.3333rem;

  }

  .life_gallery-wrapper {
    min-height: 53.3rem;
  }
  .life_gallery-items {
    min-height: 53.3rem;
  }

  .life_gallery-item {
    gap: 2.66rem;
    max-width: 51rem;
    min-width: 51rem;
    min-height: 53.3rem;
    height: 53.3rem;
  }

  .life_gallery-item:first-child {
    padding: 4.5333rem;
  }

  .life_gallery-item-name {
    font-size: 3.2rem;
    letter-spacing: -0.096rem;
  }

  .life_gallery-item-pos {
    font-size: 2.1332999999999998rem;
    line-height: 140%;
    letter-spacing: -0.0853rem;
  }
  .life_gallery-item-desc {
    font-size: 3.2rem;
    letter-spacing: -0.096rem;
  }

  .life_messages-ico {
    width: 10.6rem;
    height: 10.6rem
  }
}

@include mq(2560) {
  .life_messages {
    width: 100%;
  }
}

</style>

