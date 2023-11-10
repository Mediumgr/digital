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

import {onMounted, ref} from 'vue';

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

        item.animate({opacity: '1', 'transform': 'translateX(0rem)'}, {
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
        const {target, isIntersecting} = entry;

        if (isIntersecting) {

            target.animate({opacity: '1'}, {
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
        const {target, isIntersecting} = entry;

        if (isIntersecting) {

            target.animate({opacity: '1'}, {
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
        const {target, isIntersecting} = entry;

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

            target.animate({opacity: '1'}, {
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

                loader.animate({opacity: '1'}, {
                    duration: 750,
                    iterations: 1,
                    delay: timingDialog.value,
                    fill: 'forwards'
                });
                timingDialog.value += 750;
                msg.animate({opacity: '1'}, {
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
        let observerHeaderText = new IntersectionObserver(headerTextAnima, {rootMargin: '0px'});
        headerText.forEach((item) => {
            observerHeaderText.observe(item);
        })
    }

    // Отслеживаем вхождение в блок диалогов
    if (dialogs.length) {
        let observerDialogs = new IntersectionObserver(dialogAnima, {root: null, threshold: [1]});
        dialogs.forEach((item) => {
            observerDialogs.observe(item);
        });
    }

    // Отслеживаем вхождение в блок галерегии
    if (gallery) {
        let observerGallery = new IntersectionObserver(galleryAnima, {root: null, threshold: [1]});
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
  letter-spacing: -2.88px;
  opacity: 0;
}


.life_messages-ico {
  position: relative;
  width: 36px;
  height: 36px;
}

.life_messages-name {
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 15.6px */
  letter-spacing: -0.26px;
}

.life_messages-time {
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.26px;
  opacity: 0.6;
}

.life_messages_left-header {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 12px;
}

.life_gallery-item-name {
  position: relative;
  line-height: 120%;
  font-weight: 500;
  font-size: 16px;
  font-style: normal;
  letter-spacing: -0.48px;
}


.life_messages_left-msg {
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.6px;
  max-width: 500px;
  line-height: 120%;
  background-color: #fff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
}

.life_messages_msg-group:first-child .life_messages_left-msg {
  align-self: stretch;
  border-radius: 0 20px 20px 20px;
  align-items: flex-start;
  justify-content: flex-start;
}


.life_messages_left-list {
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  font-size: 20px;
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
  gap: 12px;
}

.life_messages_left {
  gap: 10px;
}

.life_messages_left,
.life_messages_right-msg-first {
  display: flex;
  flex-direction: row;
}


.life_messages_right-msg {
  border-radius: 20px 0 20px 20px;
  background-color: #fff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.07);
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  font-size: 20px;
  letter-spacing: -0.03em;
  line-height: 120%;
  font-weight: 500;
}

.life_messages_right-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 12px;
}


.life_messages_right {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 16px;
}


.life_gallery-menu {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
}

.life_gallery-btn {
  border-radius: 20px;
  border: 1px solid rgba(19, 20, 75, 0.2);
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  color: #13144b;
  line-height: 120%;
  font-weight: 500;
  cursor: pointer;
  font-size: 16px;
  font-style: normal;
  letter-spacing: -0.48px;
}

.life_gallery-btn:hover {
  border: 1px solid rgba(19, 20, 75, 0.40);
}

.life_gallery-btn-active {

  animation-name: btnActive;
  animation-duration: 500ms;
  animation-fill-mode: forwards
}

.life_gallery-item-icon {
  position: relative;
  border-radius: 50%;
  width: 97px;
  height: 97px;
  object-fit: cover;
}

.life_gallery-item-pos {
  position: relative;
  opacity: 0.5;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.26px;
}

.life_gallery-item-user {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6px;
}

.life_gallery-item-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.life_gallery-item-desc {
  position: relative;
  display: inline-block;
  white-space: pre-wrap;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.48px;
}

.life_gallery-item {
  border-radius: 20px;
  height: 300px;
  min-width: 335px;
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
  padding: 28px;
}

.life_gallery-item-bg {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.life_gallery-items {
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  transition: all 0.2s;
  will-change: transform;
  user-select: none;
  cursor: pointer;

  border-radius: 20px;
  height: 400px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  display: none;
}

.life_gallery {
  align-self: stretch;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
  color: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  opacity: 0;
}

.life_gallery-wrapper {
  min-height: 400px;
  display: grid;
}

.life_messages {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 335px;
  gap: 15px;
  text-align: left;
  font-size: 16px;
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
  padding: 120px 20px;
  gap: 60px;
  overflow: hidden;
  display: flex;
}

/* -------------------- Лоадер -------------------- */
.life_messages_loader {
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: row;
  padding: 10px;
  max-width: 75px;
  position: absolute;
  opacity: 0;
}

.life_messages_loader-element {
  border-radius: 100%;
  border: 5px solid #d1d1d1;
  margin: 5px;
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
    border: 5px solid #d1d1d1;
  }
  100% {
    border: 5px solid #000000;
  }
}

.life_messages-msg {
  display: flex;
  padding: 10px 15px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  opacity: 0;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.48px;
}

@media screen and (min-width: 768px) {

  .life_header {
    width: 100%;
  }

  .life_header-text {
    font-size: 6rem;
    letter-spacing: -5.76px;
  }


  .life_messages-ico {
    width: 64px;
    height: 64px;
  }

  .life_messages_left-header {
    gap: 12px;
  }

  .life_messages-msg {
    padding: 20px 30px;
    font-size: 20px;
    letter-spacing: -0.6px;
  }

  .life_gallery-item-name {
    font-size: 20px;
    letter-spacing: -0.6px;
  }


  .life_messages_left-msg {

  }

  .life_messages_msg-group:first-child .life_messages_left-msg {
    border-radius: 0 20px 20px 20px;
  }


  .life_messages_left-list {
    gap: 10px;
    font-size: 20px;
  }

  .life_messages_left-wrap {
    gap: 12px;
  }

  .life_messages_left {
    gap: 16px;
  }

  .life_messages-name, .life_messages-time {
    font-size: 16px;
    letter-spacing: -0.32px;
  }

  .life_messages_right-msg {

  }

  .life_messages_right-wrap {
    gap: 12px;
  }


  .life_messages_right {
    gap: 16px;
  }


  .life_gallery-menu {
    gap: 12px;
  }

  .life_gallery-btn {
    padding: 20px 40px;
    font-size: 20px;
    letter-spacing: -0.6px;
  }


  .life_gallery-item-icon {
    width: 64px;
    height: 64px;
  }

  .life_gallery-item-pos {
    font-size: 16px;
    letter-spacing: -0.32px;
  }

  .life_gallery-item-user {
    gap: 6px;
  }

  .life_gallery-item-header {
    gap: 12px;
  }

  .life_gallery-item-desc {
    font-size: 20px;
    letter-spacing: -0.6px;
  }

  .life_gallery-item {
    border-radius: 20px;
    height: 400px;
    opacity: 0;
  }

  .life_gallery-item:first-child {
    background-color: #424ed1;
    padding: 28px;
  }

  .life_gallery-item-bg {
    border-radius: 20px;
  }


  .life_gallery-items {
    border-radius: 20px;
    height: 400px;
    gap: 20px;
    display: none;
  }

  .life_gallery {
    gap: 20px;
    font-size: 20px;
    padding-left: 80px;
  }


  .life_messages {
    width: 688px;
    gap: 20px;
    font-size: 16px;
    margin: 0 auto;
  }

  .life {
    padding: 160px 40px;
    gap: 80px;
  }
}

@media screen and (min-width: 1440px) {

  .life {
    padding: 200px 80px;
    gap: 100px;
  }

  .life_header-text {
    font-size: 9.3rem;
    letter-spacing: -9px;
  }

  .life_messages-msg {
    display: flex;
    padding: 20px 30px;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    font-size: 24px;
    letter-spacing: -0.72px;
  }

  .life_messages {
    display: flex;
    width: 1280px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  .life_messages-name, .life_messages-time {
    line-height: 140%;
    letter-spacing: -0.64px;
  }

  .life_messages-dialog {
    width: 100%;
  }

  .life_messages_left-msg {
    max-width: 596px;
  }

  .life_messages-ico {
    width: 80px;
    height: 80px
  }

  /* -------------------- Галерея -------------------- */
  .life_gallery {
    padding-left: 96px;
  }

  .life_gallery-btn {
    font-size: 24px;
    line-height: 120%;
    letter-spacing: -0.72px;
  }

  .life_gallery-item {
    min-width: 383px;
    height: 400px;
  }
  .life_gallery-item-icon {
    width: 97px;
    height: 97px;
  }

  .life_gallery-item:first-child {
    padding: 34px;
  }

  .life_gallery-item-name {
    font-size: 24px;
    line-height: 120%;
    letter-spacing: -0.72px;
  }

  .life_gallery-item-pos {
    font-size: 16px;
    line-height: 140%;
    letter-spacing: -0.64px;
  }
  .life_gallery-item-desc {
    font-size: 24px;
    line-height: 120%;
    letter-spacing: -0.72px;
  }
}

@media screen and (min-width: 1920px) {

  .life {
    padding: 266.667px 106.667px;
    gap: 133.333px;
  }

  .life_header-text {
    font-size: 12.5rem;
    letter-spacing: -12px;
  }

  .life_messages {
    display: flex;
    width: 1706px;
    flex-direction: column;
    align-items: flex-start;
    gap: 27.7px;
  }

  .life_messages-msg {
    padding: 26.667px 40px;
    gap: 13.333px;
    font-size: 32px;
    letter-spacing: -0.96px;
  }

  .life_messages-name, .life_messages-time {
    font-size: 21.333px;
    line-height: 140%;
    letter-spacing: -0.853px;
  }

  .life_messages-dialog {
    width: 100%;
  }

  .life_messages_left {
    gap: 21px;
  }
  .life_messages_left-list {
    gap: 13px;
  }
  .life_messages_right {
    gap: 21px;
  }
  .life_messages_left-msg {
    max-width: 860px;
  }

  .life_messages-ico {
    width: 80px;
    height: 80px
  }

  /* -------------------- Галерея -------------------- */
  .life_gallery {
    padding-left: 127px;
    gap: 26.67px;
  }

  .life_gallery-btn {
    font-size: 32px;
    letter-spacing: -0.96px;
    padding: 26.667px 53.333px;
    gap: 13.333px;

  }

  .life_gallery-wrapper {
    min-height: 533px;
  }
  .life_gallery-items {
    min-height: 533px;
  }

  .life_gallery-item {
    gap: 26.6px;
    max-width: 510px;
    min-width: 510px;
    min-height: 533px;
    height: 533px;
  }

  .life_gallery-item:first-child {
    padding: 45.333px;
  }

  .life_gallery-item-name {
    font-size: 32px;
    letter-spacing: -0.96px;
  }

  .life_gallery-item-pos {
    font-size: 21.333px;
    line-height: 140%;
    letter-spacing: -0.853px;
  }
  .life_gallery-item-desc {
    font-size: 32px;
    letter-spacing: -0.96px;
  }

  .life_messages-ico {
    width: 106px;
    height: 106px
  }
}

@media screen and (min-width: 2560px) {
  .life_messages {
    width: 100%;
  }
}
</style>

